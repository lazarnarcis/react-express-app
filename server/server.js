const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const port = 3001;

const registerAPI = require("./register");
const loginAPI = require("./login");
const logoutAPI = require("./logout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'thisisthesecretkey', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: true}))

app.use(cookieParser());

app.use('/register', registerAPI);
app.use('/login', loginAPI);
app.use("/logout", logoutAPI);

app.listen(port, () => {
    console.log(`Server start at ${port}!`);
});