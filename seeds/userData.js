const { User } = require('../models');

const users = [

    {
        "name": "Mo",
        "email": "Mo@hotmail.com",
        "password": "password1",
        "state": "Michigan"
      },
      {
        "name": "Nolan",
        "email": "NolanOG@gmail.com",
        "password": "password2", 
        "state": "Florida"
      },
      {
        "name": "Nora",
        "email": "Nora20@aol.com",
        "password": "password3",
        "state": "Alaska"
      }
]; 

const seedUser = () => User.bulkCreate(users, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;