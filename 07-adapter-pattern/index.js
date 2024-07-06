const { OldAPI, NewAPI, APIAdapter } = require("./api");

class Service {
  constructor(api) {
    this.api = api;
  }

  load() {
    console.log(this.api.getData());
  }
}

const service = new Service(new OldAPI());
service.load(); // data from old API

service.api = new APIAdapter(new NewAPI());
service.load(); // data from new API
