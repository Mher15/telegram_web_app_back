"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService = require("../service/user.service");

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "getUser",
    value: function getUser(req, res, next) {
      var id;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = 1;
              _context.t0 = res;
              _context.next = 5;
              return regeneratorRuntime.awrap(UserService.getUser(id));

            case 5:
              _context.t1 = _context.sent;

              _context.t0.send.call(_context.t0, _context.t1);

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t2 = _context["catch"](0);
              next(_context.t2);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "getMyRefers",
    value: function getMyRefers(req, res, next) {
      var referId;
      return regeneratorRuntime.async(function getMyRefers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              referId = req.body.referId;
              _context2.t0 = res;
              _context2.next = 5;
              return regeneratorRuntime.awrap(UserService.getMyRefers(referId));

            case 5:
              _context2.t1 = _context2.sent;

              _context2.t0.send.call(_context2.t0, _context2.t1);

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t2 = _context2["catch"](0);
              next(_context2.t2);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "addFolowToTelegram",
    value: function addFolowToTelegram(req, res, next) {
      var chatId;
      return regeneratorRuntime.async(function addFolowToTelegram$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              chatId = req.body.chatId;
              _context3.t0 = res;
              _context3.next = 5;
              return regeneratorRuntime.awrap(UserService.addFolowToTelegram(chatId));

            case 5:
              _context3.t1 = _context3.sent;

              _context3.t0.send.call(_context3.t0, _context3.t1);

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t2 = _context3["catch"](0);
              next(_context3.t2);

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }]);

  return UserController;
}();

module.exports = new UserController();