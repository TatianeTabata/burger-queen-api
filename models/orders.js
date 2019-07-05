'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {foreignKey: 'uid'});
    Orders.hasMany(models.Order_Products, {foreignKey: 'orderId'})
    // associations can be defined here
  };
  return Orders;
};