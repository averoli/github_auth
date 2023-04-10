require("dotenv").config();
const express = require("express");
const app = express();


const { initializeApp } = require('firebase-admin/app');

app.get("/", (req, res) => {
  res.send("GitHub social login implementation");
});

//!CONNECTION DB
const connect = require("./config/db");
connect();

//!PORT TO LISTEN
app.listen(process.env.PORT, function () {
  console.log(`Server started on port ${process.env.PORT}`);
});
