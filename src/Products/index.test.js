import { Products, TestSource } from "./index";
import testData from "./sources/test-data.json";

describe("Products", () => {
  describe(".getAll", () => {
    test("if returns products", () => {
      const products = new Products(TestSource);
      const allProducts = products.getAll();
      expect(allProducts).toBe(testData.products);
    });
  });
});
