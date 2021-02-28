import LocalStorageSource from "./LocalStorageSource";
import testData from "./test-data.json";

describe("Products | LocalStorageSource", () => {
  describe(".read", () => {
    test("if it reads all products from test source", () => {
      const localStorageSource = LocalStorageSource.initialize(
        "products",
        JSON.stringify([...testData.products])
      );
      const products = localStorageSource.read("products");
      expect(products).toEqual(testData.products);
    });
  });
});
