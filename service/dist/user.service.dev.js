"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require("../models/index");

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: "getUser",
    value: function getUser(id) {
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(db.models.User.findOne({
                where: {
                  chatId: String(id)
                }
              }));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "addUser",
    value: function addUser(user) {
      return regeneratorRuntime.async(function addUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(db.models.User.create(user));

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getMyRefers",
    value: function getMyRefers(referId) {
      return regeneratorRuntime.async(function getMyRefers$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(db.models.User.findAll({
                where: {
                  referId: referId
                }
              }));

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "updateUSerCoin",
    value: function updateUSerCoin(referId, coin) {
      var user;
      return regeneratorRuntime.async(function updateUSerCoin$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(db.models.User.findOne({
                where: {
                  chatId: referId
                }
              }));

            case 2:
              user = _context4.sent;
              _context4.next = 5;
              return regeneratorRuntime.awrap(db.models.User.update({
                coin: String(Number(user.coin) + Number(coin))
              }, {
                where: {
                  chatId: referId
                }
              }));

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "addFolowToTelegram",
    value: function addFolowToTelegram(chatId) {
      var user;
      return regeneratorRuntime.async(function addFolowToTelegram$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(db.models.User.findOne({
                where: {
                  chatId: chatId
                }
              }));

            case 2:
              user = _context5.sent;
              _context5.next = 5;
              return regeneratorRuntime.awrap(db.models.User.update({
                coin: String(Number(user.coin) + 10000)
              }, {
                where: {
                  chatId: chatId
                }
              }));

            case 5:
              return _context5.abrupt("return", _context5.sent);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return UserService;
}();

module.exports = new UserService();