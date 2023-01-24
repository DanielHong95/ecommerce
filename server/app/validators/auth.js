const { check } = require("express-validator");
const Users = require("../models/auth");
const bcrypt = require("bcryptjs");

//password
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be between 6 and 15 characters.");

//email
const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email.");

//check if email exists
const emailExists = check("email").custom(async (email) => {
  const user = await Users.findOne({ where: { email: email } });
  if (user) {
    throw new Error("Email already exists.");
  }
});

// const emailExists = check("email").custom(async (value) => {
//   const { rows } = await db.query("SELECT * from users WHERE email = $1", [
//     value,
//   ]);

//   if (rows.length) {
//     throw new Error("Email already exists.");
//   }
// });

//login validation
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await Users.findOne({ where: { email: value } });
  if (!user) {
    throw new Error("Email does not exists.");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    throw new Error("Wrong password");
  }
  req.user = user;
});

// const loginFieldsCheck = check("email").custom(async (value, { req }) => {
//   const user = await db.query("SELECT * from users WHERE email = $1", [value]);

//   if (!user.rows.length) {
//     throw new Error("Email does not exists.");
//   }

//   const validPassword = await compare(req.body.password, user.rows[0].password);

//   if (!validPassword) {
//     throw new Error("Wrong password");
//   }

//   req.user = user.rows[0];
// });

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
