class LocalStrategy {
  authenticate() {
    console.log("Authenticating using local strategy");
  }
}

class JWTStrategy {
  authenticate() {
    console.log("Authenticating using JWT strategy");
  }
}

class AuthContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  authenticate() {
    this.strategy.authenticate();
  }
}

module.exports = { LocalStrategy, JWTStrategy, AuthContext };
