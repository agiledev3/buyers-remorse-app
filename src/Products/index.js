import TestSource from './sources/TestSource';

class Products {
  constructor(DataSource, DateService) {
    this.dataSource = DataSource;
    this.dateService = DateService;
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
  
  //createdAt: string in ISO format
  _calculateDaysLeft = (createdAt, coolingPeriod) => {
    let nowMs = this.dateService.getCurrent().getTime();
    let createdAtMs = Date.parse(createdAt);
    let coolingDeadline = createdAtMs + coolingPeriod * this.dateService.msInDay();
    let diffDays = (coolingDeadline - nowMs) / this.dateService.msInDay();
    //if difference is larger than 1 day i.e. cooling period hasn't lapsed yet - find value in days
    return diffDays > 1 ? Math.floor(diffDays) : 0;
  };
}

  

export { Products, TestSource };
