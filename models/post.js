const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// template for generating list data
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
      }, 
      title: {
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
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
      },
      date: {
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

module.exports = Post;