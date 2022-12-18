const Spirit = require("../models/spirit");

// crud controllers

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Spirit.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const spirit = await Spirit.findByPk(req.params.id);
    return res.status(200).json(spirit);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  try {
    const SPIRIT_MODEL = {
      // spiritname: req.body.spiritname,
    };
    try {
      const spirit = await Spirit.create(SPIRIT_MODEL);
      console.log("Spirit imported successfully");
      return res.status(201).json(spirit);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const SPIRIT_MODEL = {
      // spiritname: req.body.spiritname,
    };
    try {
      const spirit = await Spirit.update(SPIRIT_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(spirit);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const spirit = await Spirit.destroy({ where: { id: req.params.id } });
    return res.status(201).json(spirit);
  } catch (error) {
    return res.status(500).json(error);
  }
};
