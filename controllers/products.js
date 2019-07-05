const models = require('../models');
const Users = models.User;
const Product = models.Products;
const OrderItem = models.OrderProducts;


const getProducts = ("/", (req, res) => {
    Product.findAll()
    .then(products => res.send(products)
    )
});

const getProductsById = ("/:id", (req, res) => {
    Product.findByPk(req.params.id)
        .then(products => {
            res.send(products);
        })
});

const postProducts = ("/", (req, res) => Product.create(req.body)
.then(products => {
    res.status(201).send(products);
})
);

const putProducts = ("/:id", (req, res) => {
    Product.update({...req.body}, {where: { id: req.params.id}})
    .then(() => {
        Product
            .findByPk(req.params.id)
            .then(products => res.send(products))
    });
});

const deleteProducts = ("/:id", (req, res) => {
    Product.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});

module.exports = {
    getProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts
};