const Sequelize = require("sequelize");
const db = require("../utils/db");

const Products = db.define(
  "products",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Products.associate = (models) => {
  Products.hasMany(models.Favorites);
};

module.exports = Products;
