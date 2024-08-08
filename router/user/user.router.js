const Router = require("express").Router;
const UserRouter = new Router();
const UserController = require("../../controller/user.controller");

UserRouter.get("/", UserController.getUser);
UserRouter.post("/getMyrefer", UserController.getMyRefers);
UserRouter.post("/add-folow-to-telegram", UserController.addFolowToTelegram);

module.exports = UserRouter;
