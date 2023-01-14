const Favorites = require("../models/favorites");
const Products = require("../models/products");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Favorites.findAll({ include: Products });
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const favorites = await Favorites.findByPk(req.params.id);
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOneByProductId = async (req, res, next) => {
  try {
    const favorites = await Favorites.findOne({
      where: { productId: req.params.productId },
    });
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const favorites = await Favorites.findByPk(req.params.id);
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const FAVORITES_MODEL = {
      productId: req.body.productId,
    };
    try {
      const favorites = await Favorites.create(FAVORITES_MODEL);
      console.log("Favorites imported successfully");
      return res.status(201).json(favorites);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const FAVORITES_MODEL = {
      description: req.body.description,
    };
    try {
      const favorites = await Favorites.update(FAVORITES_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(favorites);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const favorites = await Favorites.destroy({ where: { id: req.params.id } });
    return res.status(201).json(favorites);
  } catch (error) {
    return res.status(500).json(error);
  }
};
