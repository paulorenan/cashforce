'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: 122,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      departament: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      verificationCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      emailChecked: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cashforceAdm: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
        allowNull: false
      }
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
