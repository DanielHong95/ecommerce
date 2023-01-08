const Sequelize = require("sequelize");
const Products = require("./products");
const Favorites = require("./favorites");
const Cart = require("./cart");
const db = require("../utils/db");

const models = {
  Products,
  Favorites,
  Cart,
};

//if a model has associate attribute, create the associations
Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = db;
models.Sequelize = Sequelize;

module.exports = models;
