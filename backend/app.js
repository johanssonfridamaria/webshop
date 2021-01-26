// import express from node_modules
const express = require('express');

// Synkronize with our app
const app = express();

const adminController = require('./controllers/adminController')
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');
const orderSchema = require('./models/orders/orderSchema');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
    }
    next()
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//controllers
app.use('/api/admin', adminController);
app.use('/api/users', userController);
app.use('/api/products', productController);
app.use('/api/orders', orderController);

//export the whole file
module.exports = app;

