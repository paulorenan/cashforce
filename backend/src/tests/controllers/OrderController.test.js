const sinon = require('sinon');
const { expect } = require('chai');
const OrderController = require('../../controllers/OrderController');
const OrderService = require('../../services/OrderService');

const orderMock = require('../mocks/orderMock');

describe('OrderController', () => {
  describe('getOrders', () => {
    const response = {};
    const request = {};
    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(orderMock);
      sinon.stub(OrderService, 'getOrders').returns(orderMock);
    });
    after(() => {
      sinon.restore();
    });
    it('should return an array of orders', async () => {
      await OrderController.getOrders(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(orderMock)).to.be.true;
    });
  });
});