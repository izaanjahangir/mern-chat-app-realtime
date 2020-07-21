const express = require("express");
const Router = new express.Router();

Router.post("/login", (req, res) => {
  res.json({ message: "login success", data: {}, success: true });
});

module.exports = Router;
