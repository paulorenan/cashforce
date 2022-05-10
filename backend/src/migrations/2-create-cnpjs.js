'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cnpjs', {
      id: {
        allowNull: false,
        autoIncrement: 437,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      cnpj: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      companyType: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cnpjs');
  }
};
