// middleware.js
class RequestHandler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class AuthHandler extends RequestHandler {
  handle(request) {
    if (request.isAuthenticated) {
      return super.handle(request);
    }
    console.log("Authentication failed");
    return null;
  }
}

class LoggingHandler extends RequestHandler {
  handle(request) {
    console.log("Request logged:", request);
    return super.handle(request);
  }
}

module.exports = { AuthHandler, LoggingHandler };
