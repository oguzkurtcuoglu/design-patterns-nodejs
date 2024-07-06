// app.js
const LoggerFactory = require("./logger-factory");

const consoleLogger = LoggerFactory.createLogger("console");
consoleLogger.log("This is a log message");

const fileLogger = LoggerFactory.createLogger("file");
fileLogger.log("This is a log message");
