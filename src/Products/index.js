import TestSource from './sources/TestSource';

class Products {
  constructor(DataSource) {
    this.dataSource = DataSource;
  }

  getAll() {
    return this._readProductsFromSource();
  }

  update(productId, productChanges) {

  }

  create(product) {

  }

  remove(productId) {

  }

  _readProductsFromSource() {
    return this.dataSource.read('products');
  }
}

export { Products, TestSource };
