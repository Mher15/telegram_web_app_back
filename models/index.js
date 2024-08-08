const Sequelize = require("sequelize");
const {
    Op
} = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: 3306,
        dialect: dbConfig.DIALECT,
    }
);

const db = {};
db.sequelize = sequelize;
db.sequelize.Op = Op;
db.models = {};

db.models.User = require("./user.model")(sequelize, Sequelize.DataTypes);

module.exports = db;
