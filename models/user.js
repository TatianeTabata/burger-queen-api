'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: 'uid'});
    // associations can be defined here
  };

  // User.create({email: "tatianetabata@hotmail.com.br"})

  return User;
};