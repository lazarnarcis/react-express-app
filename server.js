const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const port = 3001;

// APIs
const registerAPI = require("./server/register.js");
const loginAPI = require("./server/login.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', registerAPI);
app.use('/login', loginAPI);

app.listen(port, () => {
    console.log(`Server start at ${port}!`);
});