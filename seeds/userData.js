const { User } = require('../models');

const userData = [
    {
        name: 'Livak',
        email: 'Livak@livak.com',
        password: 'abc123',
    },
    {
        name: 'Bainco',
        email:'Bianco@bianco.com',
        password: 'password',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;