const express = require('express');
const LoginRouter = express.Router();
const database = require('./database');

LoginRouter.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    database.query(`SELECT * FROM users WHERE username=?`, [username], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.json({ message: "User does not exist in the database!", redirect: false });
        } else {
            if (result[0].password == password) {
                session = req.session;
                session.username = username;
                session.email = result[0].email;
                session.logged = true;
                const userdata = {
                    username: session.username,
                    logged: session.logged,
                    email: session.email,
                    redirect: "/" 
                };
                res.json({ message: "Login successful!", userdata: userdata });
            } else {
                res.json({ message: "The password is wrong!", redirect: false });
            }
        }
    });
});

module.exports = LoginRouter;