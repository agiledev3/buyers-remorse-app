import TestSource from "./sources/TestSource";
import LocalStorageSource from "./sources/LocalStorageSource";

class Products {
  constructor(DataSource, DateService) {
    this.dataSource = DataSource;
    this.dateService = DateService;
  }

  getAll() {
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

  getOne(id) {
    return this._readProductsFromSource().find((product) => product.id === id);
  }

  update(productId, productChanges) {
    const product = this.getOne(productId);
    const updatedProduct = {
      ...product,
      ...productChanges,
      questions: { ...product.questions, ...productChanges.questions },
    };
    this._writeProductToSource(productId, updatedProduct);
  }

  increaseLikeCount(productId) {
    const product = this.getOne(productId);
    const updatedProduct = {
      ...product,
      likeCount: product.likeCount !== undefined ? product.likeCount + 1 : 0,
    };
    this._writeProductToSource(productId, updatedProduct);
  }

  create(product) {
    //init data for new product
    product.likeCount = 0;
    product.createdAt = new Date().toISOString();
    product.daysLeft = product.coolingPeriod;

    this._writeProductToSource(null, product);
  }

  remove(productId) {
    this._writeProductToSource(productId, null);
  }

  _readProductsFromSource() {
    return this.dataSource.read("products");
  }

  _writeProductToSource(id, product) {
    const result = this.dataSource.write("products", product, id);
    return result;
  }

  //createdAt: string in ISO format
  _calculateDaysLeft = (createdAt, coolingPeriod) => {
    let nowMs = this.dateService.getCurrent().getTime();
    let createdAtMs = Date.parse(createdAt);
    let coolingDeadline =
      createdAtMs + coolingPeriod * this.dateService.msInDay();
    let diffDays = (coolingDeadline - nowMs) / this.dateService.msInDay();
    //if difference is larger than 1 day i.e. cooling period hasn't lapsed yet - find value in days
    return diffDays > 1 ? Math.floor(diffDays) : 0;
  };
}

export { Products, LocalStorageSource, TestSource };
