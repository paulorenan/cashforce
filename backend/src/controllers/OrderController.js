const OrderService = require('../services/OrderService');

const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res.json(orders);
};

module.exports = { getOrders };