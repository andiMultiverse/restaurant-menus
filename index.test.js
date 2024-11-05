const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */

  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const restaurant = await Restaurant.create(seedRestaurant[0]);
    expect(restaurant).toEqual(expect.objectContaining(seedRestaurant[0]));
  });

  test("can create a Menu", async () => {
    // TODO - write test
    const menu = await Menu.create(seedMenu[0]);
    expect(menu).toEqual(expect.objectContaining(seedMenu[0]));
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const [restaurants] = await Restaurant.findAll();
    expect(restaurants).toEqual(
      expect.objectContaining({
        name: "AppleBees",
        location: "Texas",
        cuisine: "FastFood",
      })
    );
  });

  test("can find Menus", async () => {
    // TODO - write test
    const [menus] = await Menu.findAll();
    expect(menus).toEqual(
      expect.objectContaining({
        title: "Breakfast",
      })
    );
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    await Restaurant.destroy({where: {name: "AppleBees"}});
    const deletedRestaurant = await Restaurant.findAll();
    expect(deletedRestaurant.length).toEqual(2);
  });
});


// it("deletedRocket contains the deleted rocket", () => {
//     // destroy returns the deleted instance
//     expect(deletedRocket).toEqual(
//       expect.objectContaining({
//         name: "High Flyer",
//         difficultyLevel: 5,
//       })
//     );
//   });