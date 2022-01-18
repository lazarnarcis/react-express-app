const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "chat"
});
connection.connect();

module.exports = connection;