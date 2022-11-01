const sequelize = require('../config/connection'); 
const { User, Lists } = require('../models'); 

const userData = require('./userData.json'); 
const listData = require('./listData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
    
      const lists = await Lists.bulkCreate(listData, {returning: true})
      
    
      process.exit(0);
    };
    
    seedDatabase();