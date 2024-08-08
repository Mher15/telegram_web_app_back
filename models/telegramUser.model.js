module.exports = (sequelize, DataTypes) => {
    const {
        STRING
    } = DataTypes;
    const TelegramUser = sequelize.define(
        "telegramUser", {
            firstName: STRING,
            lastName: STRING,
            userName: STRING,
            chatId: STRING,
        }, {
            timestamps: false,
            freezeTableName: true,
        }
    );
    return TelegramUser;
};
