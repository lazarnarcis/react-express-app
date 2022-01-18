const express = require("express");
const app = express();
const notificationsAPI = require("./server/notifications/notifications");
const port = 3001;

app.use("/api/notifications", notificationsAPI);

app.listen(port, () => {
    console.log(`Server start at ${port}`);
});