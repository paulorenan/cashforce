const Sinon = require('sinon');
const { expect } = require('chai');
const OrderService = require('../../services/OrderService');
const { Order } = require('../../models');

const orderMock = require('../mocks/orderMock');

describe('OrderService', () => {
  describe('getOrders', () => {
    before(() => {
      Sinon.stub(Order, 'findAll').returns(orderMock);
    });
    after(() => {
      Sinon.restore();
    });
    it('should return an array of orders', async () => {
      const orders = await OrderService.getOrders();
      expect(orders).to.be.an('array');
      expect(orders).to.have.lengthOf(orderMock.length);
      orderMock.forEach((order) => {
        expect(order).to.have.property('id');
        expect(order).to.have.property('user');
        expect(order).to.have.property('cnpj');
        expect(order).to.have.property('buyer');
        expect(order).to.have.property('provider');
      });
    });
  });
});