import { Products, TestSource } from "./index";
import DateServiceMock from "../Utils/DateServiceMock";

// This file is a integration test of the Product class and the source classes.
// Product class is a repository that query and modify product entities.
describe("Products", () => {
  // This block tests the "getAll" method
  describe(".getAll", () => {
    // List of expected products to be returned
    const expectedProducts = [
      {
        id: 1,
        name: "First product",
        likeCount: 3,
        linkToBuy: "www.lorem.ipsum",
        reasonToBuy: "dolor",
        reminderPeriod: 7,
        coolingPeriod: 30,
        createdAt: "2021-01-01T18:00:00.000Z",
        daysLeft: 0,
      },
      {
        id: 2,
        name: "Second product",
        likeCount: 1,
        linkToBuy: "www.lorem.ipsum",
        reasonToBuy: "dolor",
        reminderPeriod: 7,
        coolingPeriod: 30,
        createdAt: "2021-01-10T18:00:00.000Z",
        daysLeft: 0,
      },
      {
        id: 3,
        name: "Third product",
        likeCount: 5,
        linkToBuy: "www.lorem.ipsum",
        reasonToBuy: "dolor",
        reminderPeriod: 7,
        coolingPeriod: 30,
        createdAt: "2021-02-14T18:00:00.000Z",
        daysLeft: 25,
      },
    ];

    // Test if products are returned
    test("if returns products", () => {
      // Initialize Product instance
      const dateService = new DateServiceMock(new Date(2021, 1, 20));
      const products = new Products(TestSource.initialize(), dateService);
      // Execute the method to be tested
      const allProducts = products.getAll();
      // Assert if all products are returned as expected
      expect(allProducts).toEqual(expect.arrayContaining(expectedProducts));
    });
  });

  // This block tests the "increaseLikeCount" method
  describe(".increaseLikeCount", () => {
    // Initialize Product instance
    const dateService = new DateServiceMock(new Date(2021, 1, 20));
    const products = new Products(TestSource.initialize(), dateService);
    // Execute the method to be tested
    products.increaseLikeCount(1);
    // Assert if the likeCount property was increased in the product correct product entity
    expect(products.getOne(1).likeCount).toBe(4);
  });
});
