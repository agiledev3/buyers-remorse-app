import testData from './test-data.json';

const TestSource = {
  read(name) {
    return testData[name];
  },

  write(name, entity, id) {
    //try remove old version if exists
    if(id) {
      testData[name] = testData[name].filter(e => e.id !== id); 
    }
    testData[name].push(entity)
  }
}

export default TestSource;
