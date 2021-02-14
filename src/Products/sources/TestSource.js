import testData from './test-data.json';

const TestSource = {
  read(name) {
    //populate daysLeft property for each item
    testData[name].forEach((element) => {
      element.daysLeft = calculateDaysLeft(element.createdAt);
    });

    return testData[name];
  },

  write(name, entity, id) {
    //try remove old version if exists
    if (id) {
      testData[name] = testData[name].filter((e) => e.id !== id);
    }
    //set more data if new product
    else {
      entity.id = calculateNextId(testData[name]);
      entity.likeCount = 0;
      entity.createAt = new Date().toISOString();
      entity.daysLeft = entity.coolingPeriod;
    }
    //persist entity
    testData[name].push(entity);
  },
};

//createdAt: string in ISO format
const calculateDaysLeft = (createdAt) => {
  let nowMs = new Date().getTime();
  let createdAtMs = Date.parse(createdAt);
  let diffDays = (nowMs - createdAtMs) / 86400000;
  //if difference is larger than 1 day i.e. cooling period hasn't lapsed yet - find value in days
  return diffDays > 1 ? Math.floor(diffDays) : 0;
};

//entities is an array of objects each having id property
const calculateNextId = (entities) => {
  return Math.max(...entities.map((element) => element.id)) + 1;
};

export default TestSource;
