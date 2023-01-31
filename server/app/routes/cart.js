const controller = require("../controllers/cart");
const router = require("express").Router();

// endpoints
router
  .get("/users/:userId", controller.getByUserId)
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
