"use strict";

var Sequelize = require("sequelize");

var _require = require("sequelize"),
    Op = _require.Op;

var dbConfig = require("../config/db.config");

var sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: 3306,
  dialect: dbConfig.DIALECT
});
var db = {};
db.sequelize = sequelize;
db.sequelize.Op = Op;
db.models = {};
db.models.User = require("./user.model")(sequelize, Sequelize.DataTypes);
module.exports = db;