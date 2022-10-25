const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email address cannot be null/void, and must be a valid email address before creation. 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null. 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Creating a custom password method for our User model. Compares the unhashed password entered by the user to the hashed password stored in our database. 
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hook so that before a User is created, it will automatically hash their password. 
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};