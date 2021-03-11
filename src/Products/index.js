import TestSource from "./sources/TestSource";
import LocalStorageSource from "./sources/LocalStorageSource";

// Product class is a repository that query and modify product entities.
class Products {
  constructor(DataSource, DateService) {
    this.dataSource = DataSource;
    this.dateService = DateService;
  }

  // Returns all products
  getAll() {
    // Reads products from source
    var products = this._readProductsFromSource();
    //recalculates daysLeft property for each item
    products.forEach((element) => {
      element.daysLeft = this._calculateDaysLeft(
        element.createdAt,
        element.coolingPeriod
      );
    });
    return products;
  }

  // Returns the product with the given id
  getOne(id) {
    return this._readProductsFromSource().find((product) => product.id === id);
  }

  // Updates the product with the given id
  update(productId, productChanges) {
    const product = this.getOne(productId);
    // Overwrite the existing product data with the productChanges
    const updatedProduct = {
      ...product,
      ...productChanges,
      questions: { ...product.questions, ...productChanges.questions },
    };
    // Persist changes
    this._writeProductToSource(productId, updatedProduct);
  }

  // Increases the like count of the product with the given id
  increaseLikeCount(productId) {
    const product = this.getOne(productId);
    const updatedProduct = {
      ...product,
      likeCount: product.likeCount !== undefined ? product.likeCount + 1 : 0,
    };
    // Persist changes
    this._writeProductToSource(productId, updatedProduct);
  }

  // Creates a new product
  create(product) {
    //initialize data for new product
    product.likeCount = 0;
    product.createdAt = new Date().toISOString();
    product.daysLeft = product.coolingPeriod;

    // Persist changes
    this._writeProductToSource(null, product);
  }

  // Removes a product with the given id
  remove(productId) {
    this._writeProductToSource(productId, null);
  }

  // Private method to read the product data from source
  _readProductsFromSource() {
    return this.dataSource.read("products");
  }

  // Private method to write product data
  _writeProductToSource(id, product) {
    const result = this.dataSource.write("products", product, id);
    return result;
  }

  // Calculates the daysLeft property - createdAt: string in ISO format
  _calculateDaysLeft = (createdAt, coolingPeriod) => {
    let nowMs = this.dateService.getCurrent().getTime();
    let createdAtMs = Date.parse(createdAt);
    let coolingDeadline =
      createdAtMs + coolingPeriod * this.dateService.msInDay();
    let diffDays = (coolingDeadline - nowMs) / this.dateService.msInDay();
    //if difference is larger than 1 day i.e. cooling period hasn't lapsed yet - find value in days
    return diffDays > 1 ? Math.ceil(diffDays) : 0;
  };
}

export { Products, LocalStorageSource, TestSource };
