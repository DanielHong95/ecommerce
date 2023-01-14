const controller = require("../controllers/favorites");
const router = require("express").Router();

// endpoints
router
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .get("/productId/:productId", controller.getOneByProductId)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
