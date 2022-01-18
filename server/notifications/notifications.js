const express = require("express");
const router = express.Router();
const database = require(".././database");

router.get("/", (req, res) => {
    database.query("SELECT * FROM notifications", (err, results, fields) => {
        if (err)
            throw err;
        res.send(results);
    });
});

module.exports = router;