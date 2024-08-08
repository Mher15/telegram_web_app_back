"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require("../models/index");

var TelegramService =
/*#__PURE__*/
function () {
  function TelegramService() {
    _classCallCheck(this, TelegramService);
  }

  _createClass(TelegramService, [{
    key: "addUser",
    value: function addUser(firstName, lastName, userName, chatId) {
      return regeneratorRuntime.async(function addUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(db.models.TelegramUser.create({
                firstName: firstName ? firstName : "",
                lastName: lastName ? lastName : "",
                userName: userName ? userName : "",
                chatId: chatId
              }));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    } // async addMessage(message, id) {
    //     return await db.models.TelegramMessege.create({
    //         messege: message.messageText,
    //         from: message.from,
    //         to: message.to,
    //         newMessege: message.newMessege,
    //         telegramUserId: id,
    //     });
    // }
    // async getUserByChatId(chatId) {
    //     return await db.models.TelegramUser.findOne({
    //         where: {
    //             chatId,
    //         },
    //     });
    // }
    // async getUsers() {
    //     const users = await db.models.TelegramUser.findAll();
    //     const newData = [];
    //     for await (let user of users) {
    //         const messege = await db.models.TelegramMessege.findOne({
    //             where: {
    //                 telegramUserId: user.id,
    //             },
    //             limit: 1,
    //             order: [
    //                 ["updatedAt", "DESC"]
    //             ],
    //         });
    //         newData.push({
    //             chatId: user.chatId,
    //             firstName: user.firstName,
    //             id: user.id,
    //             lastName: user.lastName,
    //             userName: user.userName,
    //             newMessege: messege?.newMessege,
    //         });
    //     }
    //     return newData;
    // }
    // async getUserMessage(id) {
    //     return await db.models.TelegramMessege.findAll({
    //         where: {
    //             telegramUserId: id,
    //         },
    //     });
    // }
    // async allMessagesAreSeen(id) {
    //     if (id) {
    //         return await db.models.TelegramMessege.update({
    //             newMessege: false
    //         }, {
    //             where: {
    //                 telegramUserId: id
    //             }
    //         });
    //     }
    //     return []
    // }

  }]);

  return TelegramService;
}();

module.exports = new TelegramService();