import TestSource from './sources/TestSource';

class Products {
  constructor(DataSource) {
    this.dataSource = DataSource;
  }

  getAll() {
    return this._readProductsFromSource();
  }

  update(productId, productChanges) {
    this._writeProductToSource(productId, productChanges)
  }

  create(product) {
    this._writeProductToSource(null, product)
  }

  remove(productId) {

  }

  _readProductsFromSource() {
    return this.dataSource.read('products');
  }

  _writeProductToSource(id, product) {
    return this.dataSource.write('products', product, id);
  }
}

export { Products, TestSource };
