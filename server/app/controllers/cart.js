const Cart = require("../models/cart");
const Products = require("../models/products");
const sequelize = require("sequelize");

// crud controllers
// get cartTotal
exports.getCartTotalByUserId = async (req, res, next) => {
  try {
    const productTotal = await Cart.findAll({
      attributes: [
        [sequelize.literal("SUM(quantity * price)"), "product_total"],
      ],
      group: ["product.id"],
      where: { userId: req.params.userId },
      include: Products,
    });
    return res.status(200).json(productTotal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// by userId
exports.getByUserId = async (req, res, next) => {
  try {
    const ALL = await Cart.findAll({
      where: { userId: req.params.userId },
      include: Products,
    });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getCartItemByUserId = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: { userId: req.params.userId, productId: req.params.productId },
      include: Products,
    });
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Cart.findAll({ include: Products });
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
      productId: req.body.productId,
      userId: req.body.userId,
      quantity: req.body.quantity,
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

exports.updateQuantity = async (req, res, next) => {
  try {
    const updated = await Cart.update(
      { quantity: req.body.quantity },
      { where: { id: req.params.id } }
    );
    console.log("quantity updated");
    return res.status(200).json(updated);
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
