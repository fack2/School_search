const dbConnection = require("../db_connection.js");
const addUser = (name, password, cb) => {

  dbConnection.query(
    "INSERT name,password INTO  user  ",
    (err, res) => {

      if (err) return cb(err);
      cb(null, res.rows[0]);

    }
  );


};

module.exports = addUser;