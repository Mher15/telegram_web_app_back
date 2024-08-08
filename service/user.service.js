const db = require("../models/index");

class UserService {
    async getUser(id) {
        return await db.models.User.findOne({
            where: {
                chatId: String(id),
            },
        });
    }

    async addUser(user) {
        return await db.models.User.create(user);
    }

    async getMyRefers(referId) {
        return await db.models.User.findAll({
            where: {
                referId
            }
        });
    }
    async updateUSerCoin(referId, coin) {

        const user = await db.models.User.findOne({
            where: {
                chatId: referId
            }
        })

        return await db.models.User.update({
            coin: String(Number(user.coin) + Number(coin)),
        }, {
            where: {
                chatId: referId
            },
        });
    }

    async addFolowToTelegram(chatId) {

        const user = await db.models.User.findOne({
            where: {
                chatId: chatId
            }
        })

        return await db.models.User.update({
            coin: String(Number(user.coin) + 10000),
        }, {
            where: {
                chatId: chatId
            },
        });
    }
}

module.exports = new UserService();