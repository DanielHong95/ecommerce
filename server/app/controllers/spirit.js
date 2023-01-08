const Products = require("../models/products");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const spirits = await Products.findAll({
      where: {
        category: "spirits",
      },
    });
    return res.status(200).json(spirits);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const spirit = await Products.findByPk(req.params.id);
    return res.status(200).json(spirit);
  } catch (error) {
    return res.status(500).json(error);
  }
};
