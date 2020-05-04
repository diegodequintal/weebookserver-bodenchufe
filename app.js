const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(compression());

app.get("/", (req, res) => {
  console.log("Epalee");
  res.json("OK");
});

module.exports = app;
