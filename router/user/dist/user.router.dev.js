"use strict";

var Router = require("express").Router;

var UserRouter = new Router();

var UserController = require("../../controller/user.controller");

UserRouter.get("/", UserController.getUser);
UserRouter.post("/getMyrefer", UserController.getMyRefers);
UserRouter.post("/add-folow-to-telegram", UserController.addFolowToTelegram);
module.exports = UserRouter;