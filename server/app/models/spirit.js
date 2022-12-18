const Sequelize = require("sequelize");
const db = require("../utils/db");

const Spirit = db.define(
  "spirits",
  {
    spirit_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    spirit_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    spirit_brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    spirit_price: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_size: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_abv: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_category: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_style: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_country: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_state: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    beer_taste: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spirit_product_info: {
      type: Sequelize.STRING(500),
      allowNull: true,
    },
    spirit_image_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Spirit;
