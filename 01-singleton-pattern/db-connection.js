// dbConnection.js
class DBConnection {
  constructor() {
    if (DBConnection.instance) {
      return DBConnection.instance;
    }
    this.connection = null;
    DBConnection.instance = this;
  }

  connect() {
    this.connection = "Database Connected";
    return this.connection;
  }
}

module.exports = DBConnection;
