const User = require('./User');
const Lists = require('./Post');

// implementing models
User.hasMany(Lists, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Lists.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,  
    Lists
};