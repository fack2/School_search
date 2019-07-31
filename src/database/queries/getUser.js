const databaseConnection = require("../db_connection.js");
const getData = (name, cb) => {
    const query =
        "SELECT password FROM users where name=$1";
    databaseConnection.query(query, [name], (err, res) => {

        if (err) {
            cb(err);
        } else {
            cb(null, res.rows[0]);

        }
    });
};

module.exports = getData;