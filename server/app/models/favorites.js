const Sequelize = require("sequelize");
const db = require("../database/db");

const Favorites = db.define(
  "favorites",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Favorites.associate = (models) => {
  Favorites.belongsTo(models.Products);
  Favorites.belongsTo(models.Users);
};

module.exports = Favorites;
