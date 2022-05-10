'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: 540,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      orderNfId: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true,
        unique: true
      },
      orderFileName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true,
        unique: true
      },
      orderOriginalName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true,
        unique: true
      },
      emissionDate: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      pdfFile: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      emitedTo: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      CTE: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      value: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cnpjId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      },
      userId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      },
      providerId: {
        type: Sequelize.INTEGER(11),
        defaultValue: null,
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
      },
      deliveryReceipt: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      cargoPackingList: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      },
      deliveryCtrc: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: true
      }
    });
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};
