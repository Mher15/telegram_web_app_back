"use strict";

var Router = require("express").Router;

var router = new Router();

var UserRouter = require('./user/user.router');

router.use("/user", UserRouter);
module.exports = router;