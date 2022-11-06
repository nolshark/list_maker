const sequelize = require('../config/connection'); 
const seedLists = require('./listData'); 
const seedUser = require('./userData')

//const userData = require('./userData.json'); 
//const listData = require('./listData.json')

//const seedDatabase = async () => {
   // await sequelize.sync({ force: true });

   // const users = await User.bulkCreate(userData, {
       // individualHooks: true,
       // returning: true,
      //});
    
     // const lists = await Lists.bulkCreate(listData, {returning: true})
      
    
     // process.exit(0);
    //};
    
   // seedDatabase();

   const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedLists();

    await seedUser();

    process.exit(0);
   };

   seedAll();