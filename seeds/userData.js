const { User } = require("../models");

const userData = [
  {
    name: "Livak",
    email: "Livak@livak.com",
    password: "abc123",
  },
  {
    name: "Bianco",
    email: "Bianco@bianco.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true
});

module.exports = seedUsers;