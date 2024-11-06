const { Restaurant } = require("./Restaurant");
const { Item } = require("./Item");
const { Menu } = require("./Menu");

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

Menu.belongsToMany(Item, { through: 'MenuItem', as: 'items'});
Item.belongsToMany(Menu, { through: 'MenuItem', as: 'items'});


module.exports = { Restaurant, Menu, Item };
