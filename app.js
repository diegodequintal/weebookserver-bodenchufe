const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(compression());

app.get("/", (req, res) => {
  console.log("Epalee");
  res.json("OK");
});

module.exports = app;

const enviar = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/bodenchufe/api/user/recibirPago",
      data: {
        hola: "diego",
      },
    });
    console.log(res);
  } catch (err) {
    console.log("err");
  }
};

enviar();
