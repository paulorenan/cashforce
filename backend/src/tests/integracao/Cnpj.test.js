const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../../app');
const { Cnpj } = require('../../models');
const cnpjMock = require('../mocks/cnpjMock');

chai.use(chaiHttp);

describe('Test get cnpj by id route', () => {
  before(async () => {
    sinon.stub(Cnpj, 'findByPk').returns(cnpjMock);
  });
  after(() => {
    sinon.restore();
  });
  it('should return a cnpj', async () => {
    const res = await chai.request(app).get('/cnpjs/2');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(cnpjMock);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('cnpj');
    expect(res.body).to.have.property('companyType');
    expect(res.body).to.have.property('createdAt');
    expect(res.body).to.have.property('updatedAt');
  });
});