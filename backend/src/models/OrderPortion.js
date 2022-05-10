const OrderPortion = (sequelize, DataTypes) => {
  const orderPortion = sequelize.define('orderportions', {
    id: {
      allowNull: false,
      autoIncrement: 612,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    nDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dVenc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vDup: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    availableToMarket: {
      type: DataTypes.INTEGER(1),
      defaultValue: 1
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
      references: {
        model: 'orders',
        key: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    }
  }, { tableName: 'orderportions' });

  orderPortion.associate = models => {
    orderPortion.belongsTo(models.Order, {
      foreignKey: 'orderId',
      as: 'order'
    });
  }

  return orderPortion;
}

module.exports = OrderPortion;