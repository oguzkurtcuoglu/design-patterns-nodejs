// loggerFactory.js
class ConsoleLogger {
  log(message) {
    console.log(`Console Logger: ${message}`);
  }
}

class FileLogger {
  log(message) {
    // Imagine writing to a file here
    console.log(`File Logger: ${message}`);
  }
}

class LoggerFactory {
  static createLogger(type) {
    if (type === "console") {
      return new ConsoleLogger();
    } else if (type === "file") {
      return new FileLogger();
    }
    throw new Error("Logger type not supported");
  }
}

module.exports = LoggerFactory;
