const Sequelize = require("sequelize");
const db = require("../utils/db");

const Favorites = db.define(
  "favorites",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Favorites;
