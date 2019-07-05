const models = require('../models');
const Users = models.User;
const Orders = models.Orders;
const OrderItem = models.Order_Products;

const getOrders = (req, res) => {
    Orders.findAll({include: [{model: Order_Products, include: [Products]}, Users]})
    .then(Orders => res.send(Orders)
    )
};

const getOrdersById =  (req, res) => {
    Orders.findByPk(req.params.id, {include: [{model: OrderItem, include: [Products]}, Users]})
        .then(Orders => {
            res.send(Orders);
        })
};

const postOrders = (req, res) => Orders.create(req.body, {include: [OrderItem]})
.then(Orders => {
    res.status(201).send(Orders);
});

const putOrders = (req, res) => {
    Orders.update({...req.body}, {where: { id: req.params.id}})
    .then(() => {
        Orders
            .findByPk(req.params.id)
            .then(Orders => res.send(Orders))
    });
};

const deleteOrders = (req, res) => {
    OrderItem.destroy({where: { orderId: req.params.id}})
    Orders.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
};

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
};