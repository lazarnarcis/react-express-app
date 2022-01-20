const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

const registerAPI = require("./register.js");
const loginAPI = require("./login.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerAPI);
app.use('/login', loginAPI);

app.listen(port, () => {
    console.log(`Server start at ${port}!`);
});