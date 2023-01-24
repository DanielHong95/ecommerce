const router = require("express").Router();
const controller = require("../controllers/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { registerValidation, loginValidation } = require("../validators/auth");
const { userAuth } = require("../middlewares/auth-middleware");

router
  .get("/get-users", controller.getUsers)
  .get("/protected", userAuth, controller.protected)
  .post(
    "/register",
    registerValidation,
    validationMiddleware,
    controller.register
  )
  .post("/login", loginValidation, validationMiddleware, controller.login)
  .get("/logout", controller.logout);

module.exports = router;
