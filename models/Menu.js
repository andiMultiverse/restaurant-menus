const { sequelize } = require("../db");
const { Sequelize, DataTypes, Model } = require("sequelize");

// TODO - create a Menu model
class Menu extends Model {}

Menu.init({
  title: DataTypes.STRING,
});

module.exports = { Menu };
