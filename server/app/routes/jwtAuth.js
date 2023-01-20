const controller = require("../controllers/jwtAuth");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtGenerator = require("../utils/jwtGenerator");

// middleware
const validInfo = function (req, res, next) {
  const { email, name, password } = req.body;
  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }
  if (req.path === "/register") {
    // console.log(!email.length);
    if (![email, name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    }
  }
  next();
};

const authorize = function (req, res, next) {
  const token = req.header("jwt_token");
  console.log({ headers: req.headers });
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }
  try {
    const verify = jwt.verify(token, "jwtSecret");
    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// endpoints
router
  .post("/", authorize, controller.getUser)
  .post("/register", validInfo, controller.registerUser)
  .post("/login", controller.loginUser)
  .post("/verify", authorize, controller.verifyUser);

module.exports = router;
