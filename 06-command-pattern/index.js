const { Light, LightOnCommand, LightOffCommand } = require("./commands");

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

lightOn.execute(); // Light is On
lightOff.execute(); // Light is Off
