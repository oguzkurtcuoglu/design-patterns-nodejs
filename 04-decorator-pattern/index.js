const { SimpleCoffee, MilkDecorator, SugarDecorator } = require("./decorators");

let myCoffee = new SimpleCoffee();
console.log(myCoffee.cost());

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost());

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.cost());
