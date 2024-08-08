const db = require("../models/index");

class TelegramService {
    async addUser(firstName, lastName, userName, chatId) {
        return await db.models.TelegramUser.create({
            firstName: firstName ? firstName : "",
            lastName: lastName ? lastName : "",
            userName: userName ? userName : "",
            chatId: chatId,
        });
    }

    // async addMessage(message, id) {
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
}

module.exports = new TelegramService();
