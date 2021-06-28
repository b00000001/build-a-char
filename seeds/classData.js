const { Class } = require("../models");

const classData = [
    {
        name: "Warrior",
        hp: "100",
        mp: "0",
        strength: "18",
        dexterity: "15",
        intelligence: "6",
        charisma: "6",
        constitution: "14",
    },
    {
        name: "Priest",
        hp: "100",
        mp: "15",
        strength: "6",
        dexterity: "12",
        intelligence: "14",
        charisma: "9",
        constitution: "17",
    },
    {
        name: "Mage",
        hp: "100",
        mp: "18",
        strength: "3",
        dexterity: "10",
        intelligence: "18",
        charisma: "13",
        constitution: "8",
    },
    {
        name: "Rogue",
        hp: "100",
        mp: "0",
        strength: "9",
        dexterity: "18",
        intelligence: "10",
        charisma: "14",
        constitution: "9",
    },
];

const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;