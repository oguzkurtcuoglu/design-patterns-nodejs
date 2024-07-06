const DBConnection = require("./db-connection");

const db1 = new DBConnection();
console.log(db1.connect());

const db2 = new DBConnection();

console.log(db1 === db2);
