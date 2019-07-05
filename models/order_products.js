'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Products = sequelize.define('Order_Products', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  Order_Products.associate = function(models) {
      Order_Products.belongsTo(models.Products, {foreignKey: 'productId'})
      Order_Products.belongsTo(models.Orders, {foreignKey: 'orderId'})
    // associations can be defined here
  };
  return Order_Products;
};