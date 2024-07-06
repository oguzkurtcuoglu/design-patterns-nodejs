class APIService {
  fetchData() {
    return "data from API => " + new Date().toISOString();
  }
}

class APIProxy {
  constructor() {
    this.apiService = new APIService();
    this.cache = null;
  }

  fetchData() {
    if (!this.cache) {
      console.log("cache miss - fetching data from API");
      this.cache = this.apiService.fetchData();
    } else {
      console.log("cache hit - returning data from cache");
    }
    return this.cache;
  }
}

const apiProxy = new APIProxy();
console.log(apiProxy.fetchData());
console.log(apiProxy.fetchData());
