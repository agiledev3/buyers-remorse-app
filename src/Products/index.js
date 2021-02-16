import TestSource from './sources/TestSource';

class Products {
  constructor(DataSource) {
    this.dataSource = DataSource;
  }

  getAll() {
    var products = this._readProductsFromSource();
    //recalculates daysLeft property for each item
    products.forEach((element) => {
      element.daysLeft = this._calculateDaysLeft(element.createdAt, element.coolingPeriod);
    });
    return products;
  }

  update(productId, productChanges) {
    this._writeProductToSource(productId, productChanges)
  }

  create(product) {

     //init data for new product
    product.likeCount = 0;
    product.createdAt = new Date().toISOString();
    product.daysLeft = product.coolingPeriod;

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

  _msInDay = 86400000;
  //createdAt: string in ISO format
  _calculateDaysLeft = (createdAt, coolingPeriod) => {
    let nowMs = new Date().getTime();
    let createdAtMs = Date.parse(createdAt);
    let coolingDeadline = createdAtMs + coolingPeriod * this._msInDay;
    let diffDays = (coolingDeadline - nowMs) / this._msInDay;
    //if difference is larger than 1 day i.e. cooling period hasn't lapsed yet - find value in days
    return diffDays > 1 ? Math.floor(diffDays) : 0;
  };
}

  

export { Products, TestSource };
