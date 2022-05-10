'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsors', {
      id: {
        allowNull: false,
        autoIncrement: 17,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tradingName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      cashforceTax: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      responsibleName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      responsibleEmail: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      responsiblePosition: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      responsiblePhone: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      responsibleMobile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      website: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      postalCode: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      number: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      state: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      bank: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      bankAgency: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      account: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      situation: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      situationDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true,
        unique: true,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('sponsors');
  }
};
