const Users = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getOneByEmail = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: { email: req.params.email },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({ attributes: ["id", "email"] });
    return res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create({
      email: email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Registered successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.id,
    email: user.email,
  };
  try {
    const token = await jwt.sign(payload, "secret");
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        success: true,
        message: "Logged in successfully",
        ...user.dataValues,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
