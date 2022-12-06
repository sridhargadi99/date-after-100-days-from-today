const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = addDays(new Date(), 100);

  let newDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  response.send(newDate);
});

app.listen(3000);

module.exports = app;
