const dbConnection = require("../db_connection.js");
const postUser=(name,email,password, cb) => {

  dbConnection.query(
    'INSERT INTO users (name,email,password) values ($1,$2,$3)',
    [name,email,password],(err,res) => {
      if (err) {
          console.log(err);
            cb(err);        
        }
        else
      cb(null, res.rows[0]);

    }
  );
};
module.exports = postUser;