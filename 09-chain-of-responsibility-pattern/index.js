// app.js
const { AuthHandler, LoggingHandler } = require("./middlewares");

const authHandler = new AuthHandler();
const loggingHandler = new LoggingHandler();

authHandler.setNext(loggingHandler);

const request = { isAuthenticated: true };
authHandler.handle(request); // Request logged: { isAuthenticated: true }

const unauthenticatedRequest = { isAuthenticated: false };
authHandler.handle(unauthenticatedRequest); // Authentication failed
