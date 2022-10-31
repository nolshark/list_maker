const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lists extends Model {}

// template for generating list data
Lists.init(
  {
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      list_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
      }, 
      list_title: {
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
      },
      list_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        len: [1],
      },
    }, 
  
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
  }
);

module.exports = Lists;