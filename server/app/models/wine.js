const Sequelize = require("sequelize");
const db = require("../utils/db");

const Wine = db.define(
  "wines",
  {
    wine_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    wine_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    wine_brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    wine_year: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_price: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_size: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_abv: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_varietal: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_state: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_region: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_appellation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_style: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_taste: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    wine_product_info: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    wine_image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Wine;
