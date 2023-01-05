const Cart = require("../models/cart");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Cart.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const CART_MODEL = {
      category: req.body.category,
      category_id: req.body.category_id,
    };
    try {
      const cart = await Cart.create(CART_MODEL);
      console.log("Cart imported successfully");
      return res.status(201).json(cart);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const CART_MODEL = {
      description: req.body.description,
    };
    try {
      const cart = await Cart.update(CART_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(cart);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const cart = await Cart.destroy({ where: { id: req.params.id } });
    return res.status(201).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};
