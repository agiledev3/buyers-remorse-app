class DateServiceMock {
  constructor(Date) {
    this.date = Date;
  }

  //get stubbed object
  getCurrent() {
    return this.date;
  }

  //miliseconds in a day
  msInDay() {
    return 86400000;
  }
}

export default DateServiceMock;
