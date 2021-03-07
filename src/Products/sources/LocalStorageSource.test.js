import LocalStorageSource from "./LocalStorageSource";
import testData from "./test-data.json";

// This unit test checks if LocalStorageSource provides products data as expected
describe("Products | LocalStorageSource", () => {
  // This block tests the "read" method
  describe(".read", () => {
    test("if it reads all products from test source", () => {
      // Initialize local storage source with some dummy data
      const localStorageSource = LocalStorageSource.initialize(
        "products",
        JSON.stringify([...testData.products])
      );
      // Read products from local storage
      const products = localStorageSource.read("products");
      // Asserts if the returned data matches the dummy data
      expect(products).toEqual(testData.products);
    });
  });
});
