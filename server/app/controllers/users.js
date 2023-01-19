const Users = require("../models/users");
const passport = require("passport");
const bcrypt = require("bcryptjs");

// login user
exports.loginUser = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) {
        res.send("No User Exists");
      } else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error while authenticating user" });
  }
};

// register user
exports.registerUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    if (user) {
      res.send("User Already Exists");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const USERS_MODEL = {
        username: req.body.username,
        password: hashedPassword,
      };
      const newUsers = await Users.create(USERS_MODEL);
      res.send("User Created");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

// get user
exports.getUser = (req, res) => {
  Users.findByPk(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}; // The req.user stores the entire user that has been authenticated inside of it.
