const { LocalStrategy, JWTStrategy, AuthContext } = require("./strategies");

const authContext = new AuthContext(new LocalStrategy());
authContext.authenticate(); // Authenticating using local strategy

authContext.strategy = new JWTStrategy();
authContext.authenticate(); // Authenticating using JWT strategy
