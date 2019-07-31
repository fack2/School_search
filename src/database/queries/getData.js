const databaseConnection = require("../db_connection.js");
const getData = (name, cb) => {
  databaseConnection.query("SELECT * FROM school where name = ($1)", [name], (err, res) => {
    if (err) {
      return cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};



module.exports = getData;