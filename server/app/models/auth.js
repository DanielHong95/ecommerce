const Sequelize = require("sequelize");
const db = require("../database/db");

const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Users.associate = (models) => {
  Users.hasMany(models.Favorites);
  Users.hasMany(models.Cart);
};

module.exports = Users;
