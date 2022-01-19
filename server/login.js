const express = require('express');
const LoginRouter = express.Router();
const database = require('./database');

LoginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    database.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`, (err, results) => {
        if (err)
            throw err;
        const name_from_db = results[0].username;
        const password_from_db = results[0].password;

        if (name_from_db == username && password_from_db == password) {
            console.log("done");
        }
    });
});

module.exports = LoginRouter;