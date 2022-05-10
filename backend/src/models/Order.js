const Order = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: 540,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    orderNfId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    orderNumber: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    orderPath: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      unique: true
    },
    orderFileName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      unique: true
    },
    orderOriginalName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      unique: true
    },
    emissionDate: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    pdfFile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    emitedTo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nNf: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    CTE: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cnpjId: {
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.STRING(255),
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: DataTypes.STRING(255),
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    cargoPackingList: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    deliveryCtrc: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    }
  }, { tableName: 'orders' });

  order.associate = function(models) {
    order.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj'
    });
    order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
    order.belongsTo(models.Buyer, {
      foreignKey: 'buyerId',
      as: 'buyer'
    });
    order.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'provider'
    });
  }

  return order;
}

module.exports = Order;