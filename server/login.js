const express = require('express');
const LoginRouter = express.Router();
const database = require('./database');

LoginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    database.query(`SELECT * FROM users WHERE username=?`, [username], (err, result) => {
        if (err)
            throw err;
        if (result.length == 0) {
            res.send({ message: "User does not exist in the database!" });
        } else {
            if (result[0].password == password) {
                res.send({ message: "Login successful!" });
                database.end();
            } else {
                res.send({ message: "The password is wrong!" });
            }
        }
    });
});

module.exports = LoginRouter;