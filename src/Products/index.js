import TestSource from './sources/TestSource';

class Products {
  constructor(DataSource) {
    this.dataSource = DataSource;
  }

  getAll() {
    return this._readProductsFromSource();
  }

  create(newProduct) {

  }

  remove(productId) {

  }

  _readProductsFromSource() {
    return this.dataSource.read('products');
  }
}

export { Products, TestSource };
