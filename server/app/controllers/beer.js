const Beer = require("../models/beer");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Beer.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const beer = await Beer.findByPk(req.params.id);
    return res.status(200).json(beer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const BEER_MODEL = {
      // beername: req.body.beername,
    };
    try {
      const beer = await Beer.create(BEER_MODEL);
      console.log("Beer imported successfully");
      return res.status(201).json(beer);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const BEER_MODEL = {
      // beername: req.body.beername,
    };
    try {
      const beer = await Beer.update(BEER_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(beer);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const beer = await Beer.destroy({ where: { id: req.params.id } });
    return res.status(201).json(beer);
  } catch (error) {
    return res.status(500).json(error);
  }
};
