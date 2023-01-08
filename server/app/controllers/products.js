const Products = require("../models/products");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Products.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const products = await Products.findByPk(req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const PRODUCTS_MODEL = {
      // productsname: req.body.productsname,
    };
    try {
      const products = await Products.create(PRODUCTS_MODEL);
      console.log("Products imported successfully");
      return res.status(201).json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const PRODUCTS_MODEL = {
      // productsname: req.body.productsname,
    };
    try {
      const products = await Products.update(PRODUCTS_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(products);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const products = await Products.destroy({ where: { id: req.params.id } });
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};
