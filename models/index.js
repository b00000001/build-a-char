const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");

Character.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Character, {
    foreignKey: "user_id",
});

Class.belongsTo(Character, {
    foreignKey: "character_id",
});

Character.hasOne(Class, {
    foreignKey: "character_id",
});

module.exports = { User, Character, Class };