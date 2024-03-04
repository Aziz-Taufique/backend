require("dotenv").config();
const express = require("express");
// import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("azizdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Pleas login to aziz.com</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Elon musk</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
