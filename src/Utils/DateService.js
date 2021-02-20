class DateService {
  constructor() {
  }

  //get current date object
  getCurrent() {
    return new Date();
  }

  //miliseconds in a day
  msInDay(){
    return 86400000;
  }

}

export default DateService ;
