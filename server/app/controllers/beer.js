const Products = require("../models/products");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const beers = await Products.findAll({
      where: {
        category: "beers",
      },
    });
    return res.status(200).json(beers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const beer = await Products.findByPk(req.params.id);
    return res.status(200).json(beer);
  } catch (error) {
    return res.status(500).json(error);
  }
};
