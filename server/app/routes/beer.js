const controller = require("../controllers/beer");
const router = require("express").Router();

// endpoints
router.get("/", controller.getAll).get("/:id", controller.getOne);

module.exports = router;
