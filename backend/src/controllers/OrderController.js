const OrderService = require('../services/OrderService');

const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res.status(200).json(orders);
};

module.exports = { getOrders };