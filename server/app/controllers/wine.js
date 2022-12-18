const Wine = require("../models/wine");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Wine.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const wine = await Wine.findByPk(req.params.id);
    return res.status(200).json(wine);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const WINE_MODEL = {
      // winename: req.body.winename,
    };
    try {
      const wine = await Wine.create(WINE_MODEL);
      console.log("Wine imported successfully");
      return res.status(201).json(wine);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const WINE_MODEL = {
      // winename: req.body.winename,
    };
    try {
      const wine = await Wine.update(WINE_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(wine);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const wine = await Wine.destroy({ where: { id: req.params.id } });
    return res.status(201).json(wine);
  } catch (error) {
    return res.status(500).json(error);
  }
};
