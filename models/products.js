'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.Order_Products, {
      foreignKey: "productId"
    })
    // associations can be defined here
  };

  
  //   // {name: "Hamburger simples bovino"},
  //   // {price: "10"}
  // Products.create({name: "Hamburger Simples de Frango", price: "10"})
  // Products.create({name: "Hamburger Simples Vegetariano", price: "10"})
  // Products.create({name: "Hamburger Duplo Bovino", price: "15"})
  // Products.create({name: "Hamburger Duplo de Frango", price: "15"})
  // Products.create({name: "Hamburger Duplo Vegetariano", price: "15"})
  // Products.create({name: "Café Americano", price: "5"})
  // Products.create({name: "Café com Leite", price: "7"})
  // Products.create({name: "Sanduíche de Presunto e Queijo", price: "10"})
  // Products.create({name: "Suco de Fruta Natural", price: "7"})
  // Products.create({name: "Batata Frita", price: "5"})
  // Products.create({name: "Anéis de Cebola", price: "5"})
  // Products.create({name: "Água 500 ml", price: "5"})
  // Products.create({name: "Água 750 ml", price: "7"})
  // Products.create({name: "Bebida Gaseificada 500 ml", price: "7"})
  // Products.create({name: "Bebida Gaseificada 750 ml", price: "10"})
  // Products.create({name: "Queijo", price: "1"})
  // Products.create({name: "Ovo", price: "1"})

  return Products;
};