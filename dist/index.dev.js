"use strict";

require("dotenv").config();

var express = require("express");

var cors = require("cors");

var bodyParser = require("body-parser");

var router = require("./router/router");

var db = require("./models/index");

var app = express();
var PORT = 8000;

var http = require('http');

var server = http.createServer(app);

var _require = require("socket.io"),
    Server = _require.Server;

var io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

var TelegramBot = require("node-telegram-bot-api");

var TelegramService = require("./service/telegram.service");

var telegramToken = "6992876241:AAFW4V5qkDSKeytKsk0fT4LUJW7129QVQHQ";
var bot = new TelegramBot(telegramToken, {
  polling: true
});
var userIds = [];
var referralLink = 'https://t.me/etena_15_bot?start=';
app.use(cors());
app.use(bodyParser.json());
io.on("refLink", function (link) {
  console.log(link);
}); // bot.onText(/\/sendreferrals/, (msg) => {
//     const chatId = msg.chat.id;
//     const linkRef = referralLink + chatId
//     // bot.sendMessage(chatId, `Привет! Вот твоя реферальная ссылка: ${referralLink}`);
//     // // });
//     // bot.sendMessage(chatId, 'Реферальные ссылки отправлены!');
// });

bot.on('getreferrals', function (msg) {
  var chatId = msg.chat.id;
  var linkRef = referralLink + chatId;
  console.log('getreferrals');
});
bot.onText(/\/start/, function (msg) {
  console.log(msg);
  var chatId = msg.chat.id;
  var options = {
    reply_markup: {
      inline_keyboard: [[{
        text: 'Open Web App',
        url: 'https://t.me/etena_15_bot/etena15'
      }]]
    }
  };
  bot.sendMessage(chatId, 'Welcome! Click the button below to open the web app.', options);
});
io.on('connection', function (socket) {
  socket.on('ref', function (socket) {
    console.log('apeeeeeeeee');
    bot.emit('getreferrals');
  });
});
bot.on("polling_error", function (error) {
  console.error(error);
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/test', function (req, res) {
  console.log('001');
  res.send('test');
});
app.use("/api", router);
server.listen(PORT, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("server started on port ".concat(PORT));
          _context.next = 3;
          return regeneratorRuntime.awrap(db.sequelize.sync());

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});