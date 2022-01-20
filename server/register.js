const express = require("express");
const RegisterRouter = express.Router();
const database = require("./database");

RegisterRouter.post("/", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    database.query(`SELECT * FROM users WHERE username='${username}'`, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            database.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
                if (err) throw err;
                if (result.length == 0) {
                    database.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`, (err, result) => {
                        if (err) throw err;
                        res.json({ message: "The user has been entered into the database!", redirect: true });
                        database.end();
                    });
                } else {
                    res.json({ message: "That email address is already in use!" });
                }
            });
        } else {
            res.json({ message: "The user already exists in the database!" });
        }
    });
});

module.exports = RegisterRouter;