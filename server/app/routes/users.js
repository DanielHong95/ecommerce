const controller = require("../controllers/users");
const router = require("express").Router();

// endpoints
router
  .get("/user", controller.getUser)
  .post("/register", controller.registerUser)
  .post("/login", controller.loginUser);

module.exports = router;
