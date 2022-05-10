const Offer = (sequelize, DataTypes) => {
  const offer = sequelize.define('Offer', {
    id: {
      allowNull: false,
      autoIncrement: 40,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tariff: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adValorem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    float: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iof: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentStatusSponsor: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
    },
    paymentStatusProvider: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0
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
    },
    sponsorId: {
      type: DataTypes.INTEGER(11),
      defaultValue: null,
      references: {
        model: 'sponsors',
        key: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    }
  }, { tableName: 'offers' });
  offer.associate = (models) => {
    offer.belongsTo(models.Order, {
      foreignKey: 'orderId',
      as: 'order'
    });
    offer.belongsTo(models.Sponsor, {
      foreignKey: 'sponsorId',
      as: 'sponsor'
    });
  }

  return offer;
}

module.exports = Offer;
