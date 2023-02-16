const controller = require("../controllers/cart");
const router = require("express").Router();

// endpoints
router
  .get("/users/:userId", controller.getByUserId)
  .get("/:userId/:productId", controller.getCartItemByUserId)
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .get("/product_total/users/:userId", controller.getCartTotalByUserId)
  .post("/", controller.createOne)
  .put("/quantity/:id", controller.updateQuantity)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
