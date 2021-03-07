import TestSource from "./TestSource";
import testData from "./test-data.json";

// This unit test checks if TestSource provides products data as expected
describe("Products | TestSource", () => {
  // This block tests the "read" method
  describe(".read", () => {
    test("if it reads all products from test source", () => {
      // Initialize test source with dummy data
      const testSource = TestSource.initialize();
      // Reads products from test source
      const products = testSource.read("products");
      // Asserts if the returned data matches the json data
      expect(products).toEqual(testData.products);
    });
  });
});
