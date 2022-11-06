const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lists extends Model {}

// template for generating list data
Lists.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      list_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1],
      }, 
      list_type: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1],
      },
      list_contents: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      list_comments: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1],
      },
      list_date: {
        type: DataTypes.DATE,
        allowNull: true,
        len: [1],
      },
    }, 
  
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
  }
);

module.exports = Lists;