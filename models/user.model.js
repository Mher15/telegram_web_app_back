module.exports = (sequelize, DataTypes) => {
    const {
        STRING
    } = DataTypes;
    const User = sequelize.define(
        "users", {
            first_name: STRING,
            last_name: STRING,
            referId: STRING,
            parentReferId: STRING,
            chatId: STRING,
            photo: STRING,
            username: STRING,
            coin:STRING
        }, {
            timestamps: true,
            freezeTableName: true,
        }
    );
    return User;
};