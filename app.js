const express = require("express");
const app = express();

app.get("/", (require, repsonse) => {
  const dateTime = new Date();
  repsonse.send(
    `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
  );
});

module.exports = app;
