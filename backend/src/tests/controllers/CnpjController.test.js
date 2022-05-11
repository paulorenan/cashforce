const sinon = require('sinon');
const { expect } = require('chai');
const CnpjController = require('../../controllers/CnpjController');
const CnpjService = require('../../services/CnpjService');

const cnpjMock = require('../mocks/cnpjMock');

describe('CnpjController', () => {
  describe('getCnpjById', () => {
    const response = {};
    const request = {};
    before(() => {
      request.params = { id: '2' };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(cnpjMock);
      sinon.stub(CnpjService, 'getCnpjById').returns(cnpjMock);
    });
    after(() => {
      sinon.restore();
    });
    it('should return a cnpj', async () => {
      await CnpjController.getCnpjById(request, response);
      expect(response.status.calledWith(200)).to.be.true;
      expect(response.json.calledWith(cnpjMock)).to.be.true;
    });
  });
});