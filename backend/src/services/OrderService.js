const { Order, User, Cnpj, Buyer, Provider } = require('../models');

const getOrders = async () => {
  const orders = await Order.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Cnpj, as: 'cnpj' },
      { model: Buyer, as: 'buyer' },
      { model: Provider, as: 'provider' }
    ]
  });
  return orders;
};

module.exports = { getOrders };
