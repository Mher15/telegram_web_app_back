require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/router");
const db = require("./models/index");
const axios = require("axios");
const app = express();
const PORT = 8000;
const userService = require('./service/user.service')
const fs = require('fs');
const path = require('path');

const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

const TelegramBot = require("node-telegram-bot-api");
const TelegramService = require("./service/telegram.service")
const telegramToken = "6992876241:AAFW4V5qkDSKeytKsk0fT4LUJW7129QVQHQ";
const bot = new TelegramBot(telegramToken, {
    polling: true
});

const referralLink = 'https://t.me/etena_15_bot?start=';

app.use(cors());
app.use(bodyParser.json());

io.on("refLink",(link)=>{
    console.log(link)
})

bot.on('getreferrals',(msg)=>{
      const chatId = msg?.chat?.id ? msg?.chat?.id : '963717429'
      const linkRef = referralLink + chatId
   io.emit('reflinlforfront', {
       link: linkRef
   })
})

bot.on('getUserInfo', (msg) => {
    io.emit('userInfo', {
        user: msg?.from
    })
})

bot.onText(/\/start/,async (msg) => {
    console.log('msg', msg)
    const refId = msg.text.split(' ')[1]
    const chatId = msg.chat.id;
    const user = await userService.getUser(chatId)
    if(!user){
        const userFoto = await getProfilePictureUrl(telegramToken, chatId)
        const myRefer = await userService.getUser(refId)
        if (myRefer?.referId){
            const parRefer = await userService.updateUSerCoin(myRefer?.referId,'10000')
        }
        if (refId) {
            const ref = await userService.updateUSerCoin(refId,'20000')
        }
        await userService.addUser({
            first_name: msg?.from?.first_name ? msg?.from?.first_name : '',
            last_name: msg?.from?.last_name ? msg?.from?.last_name : '',
            referId: refId,
            chatId: String(msg?.from?.id),
            username: String(msg?.from?.username) ? String(msg?.from?.username) :'',
            photo: userFoto,
            parentReferId: myRefer?.referId ? myRefer?.referId : null,
            coin:"10000"
        })
    }
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Open Web App',
                    url: 'https://t.me/etena_15_bot/etena15'
                }]
            ]
        }
    };
    bot.sendMessage(chatId, 'Welcome! Click the button below to open the web app.', options);
});

io.on('connection', (socket) => {
    socket.on('ref', () => {
        bot.emit('getreferrals')
    });
    socket.on('getUserInfo', () => {
        bot.emit('getUserInfo')
    });
});

bot.on("polling_error", (error) => {
    console.error(error);
});


async function getProfilePictureUrl(botToken, userId) {
    try {
        // Step 1: Get user profile photos
        const profilePhotosResponse = await axios.get(`https://api.telegram.org/bot${botToken}/getUserProfilePhotos`, {
            params: {
                user_id: userId
            }
        });
        console.log('profilePhotosResponse.data', profilePhotosResponse.data)
        if (profilePhotosResponse.data.ok) {
            const photos = profilePhotosResponse.data.result.photos;
            if (photos.length > 0) {
                // Step 2: Get the largest photo available
                const fileId = photos[photos.length - 1][photos[photos.length - 1].length - 1].file_id;

                const fileResponse = await axios.get(`https://api.telegram.org/bot${botToken}/getFile`, {
                    params: {
                        file_id: fileId
                    }
                });

                if (fileResponse.data.ok) {
                    const filePath = fileResponse.data.result.file_path;
                    // Construct the URL to access the profile picture
                    const profilePictureUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;
                    return profilePictureUrl;
                } else {
                    throw new Error('Failed to get file path.');
                }
            } else {
                throw new Error('No profile photos found.');
            }
        } else {
            throw new Error('Failed to get profile photos.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/api", router);

server.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`);
    await db.sequelize.sync();
});