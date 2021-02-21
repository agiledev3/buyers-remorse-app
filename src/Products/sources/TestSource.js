import testData from './test-data.json';

const TestSource = {
  read(name) {
    return testData[name];
  },

  write(name, entity, id) {
    //try remove old version if exists
    if (id) {
      testData[name] = testData[name].filter((e) => e.id !== id);
    }
    else{
      //set a new unique id
      entity.id = calculateNextId(testData[name]);
    }
    //persist entity
    testData[name].push(entity);
  },
};

//emulates identity generation
const calculateNextId = (entities) => {
  return Math.max(...entities.map((element) => element.id)) + 1;
};

export default TestSource;
