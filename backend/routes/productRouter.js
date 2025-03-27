const express = require('express');
const { addProducts, allProducts, deleteProducts } = require('../controller/productController');
const productRouter = express.Router();

productRouter.get('/all', allProducts);
productRouter.post('/add', addProducts);
productRouter.delete('/delete/:id', deleteProducts);

module.exports = productRouter;  
