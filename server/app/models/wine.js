const Sequelize = require("sequelize");
const db = require("../utils/db");

const Wine = db.define(
  "wines",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    size: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    abv: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    varietal: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    region: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    appellation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    style: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    taste: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    product_info: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Wine;
