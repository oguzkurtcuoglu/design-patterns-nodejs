class OldAPI {
  getData() {
    return "data from old API";
  }
}

class NewAPI {
  fetchData() {
    return "data from new API";
  }
}

class APIAdapter {
  constructor(api) {
    this.api = api;
  }

  getData() {
    return this.api.fetchData();
  }
}

module.exports = { OldAPI, NewAPI, APIAdapter };
