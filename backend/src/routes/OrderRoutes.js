const OrderController = require('../controllers/OrderController');
const { Router } = require('express');

const OrderRoutes = Router();

OrderRoutes.get('/', OrderController.getOrders);

module.exports = OrderRoutes;