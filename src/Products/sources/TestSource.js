import testData from './test-data.json';

const TestSource = {
  read(name) {
    return testData[name];
  }
}

export default TestSource;
