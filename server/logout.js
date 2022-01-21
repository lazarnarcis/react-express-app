const express = require("express");
const LogoutRouter = express.Router();

LogoutRouter.get('/',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = LogoutRouter;