const { sequelize, DataTypes } = require("../db");

class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "item",
  }
);

module.exports = { Item };
