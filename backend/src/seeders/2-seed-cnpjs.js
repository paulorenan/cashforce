'use strict';

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('cnpjs', [{
      id: 1,
      cnpj: '00000000000001',
      companyType: '2',
      createdAt: new Date('2020-10-29 21:20:33'),
      updatedAt: new Date('2020-10-29 21:20:33'),
    }, {
      id: 2,
      cnpj: '00000000000002',
      companyType: '1',
      createdAt: new Date('2020-10-29 21:20:33'),
      updatedAt: new Date('2020-10-29 21:20:33'),
    }], {});
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('cnpjs', null, {});
  }
};
