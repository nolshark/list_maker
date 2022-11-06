const { User } = require('../models');

const userdata = [
    {
        email: "Mo@mo.com",
        password: "password1"
    },
    {
        email: "Nolan@no.com",
        password: "password2"
    },
    {
        email: "Nora@ra.sphinx",
        password: "password3"
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;