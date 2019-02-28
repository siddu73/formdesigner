import axios from 'axios';

export default class EventManager {
    baseUrl = "http://localhost:3001/api";
    constructor() {
    }
    logEvent(type, log) {

      //http clint call to store
      console.log(type, log);

      axios.post(this.baseUrl+'/eventloggers', {
        description: type,
        log: JSON.stringify(log)
      })
      .then(function (response) {
        console.log(response);
        console.log("event logged");
      })
      .catch(function (error) {
        console.log(error);
      });

    }
}