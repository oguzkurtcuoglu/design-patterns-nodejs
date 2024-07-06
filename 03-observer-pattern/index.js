const myEmitter = require("./event-emitter");

class Service {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }

  listen() {
    myEmitter.on("event", () => {
      console.log(`${this.serviceName} received an event!`);
    });
  }
}

const service1 = new Service("Service 1");
service1.listen();

const service2 = new Service("Service 2");
service2.listen();

myEmitter.emit("event");
