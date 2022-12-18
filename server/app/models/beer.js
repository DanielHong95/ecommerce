const Sequelize = require("sequelize");
const db = require("../utils/db");

const Beer = db.define(
  "beers",
  {
    beer_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    beer_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    beer_brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    beer_price: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_size: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_abv: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_style: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_market: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_state: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_city: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    beer_taste: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beer_product_info: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    beer_image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Beer;
