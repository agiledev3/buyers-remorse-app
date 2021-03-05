import { Products, TestSource } from "./index";
import DateServiceMock from "../Utils/DateServiceMock";

describe("Products", () => {
  describe(".getAll", () => {
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
    test("if returns products", () => {
      const dateService = new DateServiceMock(new Date(2021, 1, 20));
      const products = new Products(TestSource.initialize(), dateService);
      const allProducts = products.getAll();
      expect(allProducts).toEqual(expect.arrayContaining(expectedProducts));
    });
  });

  describe(".increaseLikeCount", () => {
    const dateService = new DateServiceMock(new Date(2021, 1, 20));
    const products = new Products(TestSource.initialize(), dateService);
    products.increaseLikeCount(1);
    expect(products.getOne(1).likeCount).toBe(4);
  });
});
