import testData from "./test-data.json";

const TestSource = {
  initialize() {
    this._testData = { products: [...testData.products] };
    return this;
  },

  read(name) {
    return this._testData[name];
  },

  write(name, entity, id) {
    //try remove old version if exists
    if (id) {
      this._testData[name] = this._testData[name].filter((e) => e.id !== id);
    } else {
      //set a new unique id
      entity.id = calculateNextId(this._testData[name]);
    }
    //persist entity
    this._testData[name].push(entity);
  },
};

//emulates identity generation
const calculateNextId = (entities) => {
  return Math.max(...entities.map((element) => element.id)) + 1;
};

export default TestSource;
