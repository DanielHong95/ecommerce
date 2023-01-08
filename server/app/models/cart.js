const Sequelize = require("sequelize");
const db = require("../utils/db");

const Cart = db.define(
  "carts",
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
  },
  {
    timestamps: false,
  }
);

Cart.associate = (models) => {
  Cart.belongsTo(models.Products);
};

module.exports = Cart;
