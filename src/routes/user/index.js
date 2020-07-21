const express = require("express");
const Router = new express.Router();

const userController = require("../../controllers/user");

Router.post("/login", userController.login);
Router.post("/register", userController.register);

module.exports = Router;
