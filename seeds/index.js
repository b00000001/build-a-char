const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedCharacter = require('./characterData');
const seedClass = require('./classData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedClass();
    
    await seedCharacter();
    
    await seedUser();

    process.exit(0);
};

seedAll();
