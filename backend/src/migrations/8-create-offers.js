'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: 40,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      tax: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      float: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.INTEGER(1),
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        references: {
          model: 'orders',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      },
      sponsorId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        references: {
          model: 'sponsors',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('offers');
  }
};
