'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: 612,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      nDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1
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
      }
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('orderportions');
  }
};
