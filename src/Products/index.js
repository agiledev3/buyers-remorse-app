import TestSource from "./sources/TestSource";

class Products {
  constructor(DataSource, updateCallback) {
    this.dataSource = DataSource;
    this.updateCallback = updateCallback;
  }

  getAll() {
    return this._readProductsFromSource();
  }

  getOne(id) {
    return this._readProductsFromSource().find((product) => (product.id === id));
  }

  update(productId, productChanges) {
    const product = this.getOne(productId);
    const updatedProduct = {
      ...product,
      ...productChanges,
      questions: { ...product.questions, ...productChanges.questions },
    };
    this._writeProductToSource(productId, updatedProduct );
  }

  create(product) {
    this._writeProductToSource(null, product);
  }

  remove(productId) {}

  _readProductsFromSource() {
    return this.dataSource.read("products");
  }

  _writeProductToSource(id, product) {
    const result = this.dataSource.write("products", product, id);
    this.updateCallback();
    return result;
  }
}

export { Products, TestSource };
