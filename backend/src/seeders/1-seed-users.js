'use strict';

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'ALLAN SOUZA',
      email: 'allan@cashforce.com.br',
      phoneNumber: null,
      mobile: null,
      departament: null,
      verificationCode: '',
      emailChecked: 1,
      createdAt: new Date('2020-10-01 21:31:37'),
      updatedAt: new Date('2020-10-01 22:41:23'),
      cashforceAdm: 1
    }], {});
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
