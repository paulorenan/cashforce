const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../../app');
const { Order } = require('../../models');
const orderMock = require('../mocks/orderMock');

chai.use(chaiHttp);

describe('Test get orders route', () => {
  before(async () => {
    sinon.stub(Order, 'findAll').returns(orderMock);
  });
  after(() => {
    sinon.restore();
  });
  it('should return an array of orders', async () => {
    const res = await chai.request(app).get('/orders');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(orderMock);
    orderMock.forEach((order) => {
      expect(order).to.have.property('id');
      expect(order).to.have.property('user');
      expect(order).to.have.property('cnpj');
      expect(order).to.have.property('buyer');
      expect(order).to.have.property('provider');
    });
  });
});