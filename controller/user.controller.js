const UserService = require("../service/user.service");

class UserController {
    async getUser(req, res, next) {
        try {
            const id = 1;
            res.send(await UserService.getUser(id));
        } catch (err) {
            next(err);
        }
    }

    async getMyRefers(req, res, next) {
        try {
            const {
                referId
            } = req.body;
            res.send(await UserService.getMyRefers(referId));
        } catch (err) {
            next(err);
        }
    }

    async addFolowToTelegram(req, res, next) {
        try {
            const {
                chatId
            } = req.body;
            res.send(await UserService.addFolowToTelegram(chatId));
        } catch (err) {
            next(err);
        }
    }


}

module.exports = new UserController();