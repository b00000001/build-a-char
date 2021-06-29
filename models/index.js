const User = require("./User");
const Character = require("./Character");
const Class = require("./Class");
const UserCharacter = require("./UserCharacter");

Character.belongsToMany(User, {
  through: {
    model: UserCharacter,
    unique: false,
  },
  as: "user_list"
});

User.belongsToMany(Character, {
  through: {
    model: UserCharacter,
    unique: false,
  },
  as: "character_list"
});

Class.hasMany(Character, {
  foreignKey: "class_id",
});

Character.belongsTo(Class, {
  foreignKey: "class_id",
});

module.exports = { User, Character, Class, UserCharacter };