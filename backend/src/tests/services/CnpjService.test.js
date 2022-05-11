const Sinon = require('sinon');
const { expect } = require('chai');
const CnpjService = require('../../services/CnpjService');
const { Cnpj } = require('../../models');

const cnpjMock = require('../mocks/cnpjMock');

describe('CnpjService', () => {
  describe('get cnpj by Id', () => {
    before(() => {
      Sinon.stub(Cnpj, 'findByPk').returns(cnpjMock);
    });
    after(() => {
      Sinon.restore();
    });
    it('should return a cnpj', async () => {
      const cnpj = await CnpjService.getCnpjById(cnpjMock.id);
      expect(cnpj).to.be.an('object');
      expect(cnpj).to.have.property('id');
      expect(cnpj).to.have.property('cnpj');
      expect(cnpj).to.have.property('companyType');
      expect(cnpj).to.have.property('createdAt');
      expect(cnpj).to.have.property('updatedAt');
    });
  });
});