const Router = require("express").Router;
const router = new Router();
const UserRouter = require('./user/user.router')

router.use("/user", UserRouter);

module.exports = router;
