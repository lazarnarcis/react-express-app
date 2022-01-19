const express = require("express");
const RegisterRouter = express.Router();
const database = require("./database");

RegisterRouter.post("/", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    database.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`, (err, results) => {
        if (err) 
            throw err;
        console.log("1 row inserted!");
    });
    database.end();
});

module.exports = RegisterRouter;