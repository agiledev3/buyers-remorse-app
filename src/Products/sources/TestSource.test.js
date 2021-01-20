import TestSource from "./TestSource";
import testData from './test-data.json';

describe('Products | TestSource', () => {
  describe('.read', () => {
    test('if it reads all products from test source', () => {
      const products = TestSource.read('products');
      expect(products).toEqual(testData.products)
    })
  })
})
