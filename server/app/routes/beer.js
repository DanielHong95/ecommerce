const controller = require("../controllers/beer");
const router = require("express").Router();

// endpoints
router
  .get("/", controller.getAll)
  .get("/:id", controller.getOne)
  .post("/", controller.createOne)
  .put("/:id", controller.updateOne)
  .delete("/:id", controller.deleteOne);

module.exports = router;
