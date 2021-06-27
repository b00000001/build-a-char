const { Character } = require('../models');

const characterData = [
    {
        name:'Lothar',
        race: 'Orc',
        gender: 'Male',
        class_id: '1',
    },
    {
        name: 'Anduin',
        race: 'Human',
        gender: 'Male',
        class_id: '2',
    }, 
    {
        name: 'Jaina',
        race: 'Human',
        gender: 'Female',
        class_id: '3',
    },
    {
        name: 'Valeera',
        race: 'Elf',
        gender: 'female',
        class_id: '4'
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;