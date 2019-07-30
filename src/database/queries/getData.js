const databaseConnection = require("../db_connection.js");
const getData = (name, cb) => {
  const query =
    "SELECT * FROM school";
  databaseConnection.query(query, (err, res) => {

    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
