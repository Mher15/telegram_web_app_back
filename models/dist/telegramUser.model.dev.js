"use strict";

module.exports = function (sequelize, DataTypes) {
  var STRING = DataTypes.STRING;
  var TelegramUser = sequelize.define("telegramUser", {
    firstName: STRING,
    lastName: STRING,
    userName: STRING,
    chatId: STRING
  }, {
    timestamps: false,
    freezeTableName: true
  });
  return TelegramUser;
};