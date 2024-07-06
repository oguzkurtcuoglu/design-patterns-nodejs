class Light {
  turnOn() {
    console.log("Light is On");
  }

  turnOff() {
    console.log("Light is Off");
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

module.exports = { Light, LightOnCommand, LightOffCommand };
