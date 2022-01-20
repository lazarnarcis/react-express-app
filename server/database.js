const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "test-app"
});
connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;