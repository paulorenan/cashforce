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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cnpjs');
  }
};
