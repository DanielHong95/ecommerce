const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const Users = require("../models/jwtAuth");

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { id: req.params.id },
      attributes: ["username"],
    });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (user) {
      return res.status(401).json("User already exist!");
    }
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    let newUser = await Users.create({
      name,
      email,
      password: bcryptPassword,
    });
    // const jwtToken = jwtGenerator(newUser.id);
    // return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      return res.status(401).json("Invalid Credential");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.verifyUser = (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
