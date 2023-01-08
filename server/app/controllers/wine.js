const Products = require("../models/products");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const wines = await Products.findAll({
      where: {
        category: "wines",
      },
    });
    return res.status(200).json(wines);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const wine = await Products.findByPk(req.params.id);
    return res.status(200).json(wine);
  } catch (error) {
    return res.status(500).json(error);
  }
};
