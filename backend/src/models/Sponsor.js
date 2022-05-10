const Sponsor = (sequelize, DataTypes) => {
  const sponsor = sequelize.define('Sponsor', {
    id: {
      allowNull: false,
      autoIncrement: 17,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tradingName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    cashforceTax: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    responsibleName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    responsibleEmail: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    responsiblePosition: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    responsiblePhone: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    responsibleMobile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    postalCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    complement: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    bankAgency: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    situation: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    situationDate: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    cnpjId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cnpjs',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true,
      unique: true,
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }
  }, { tableName: 'sponsors' });

  sponsor.associate = (models) => {
    sponsor.belongsTo(models.Cnpj, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  }
  return sponsor;
}

module.exports = Sponsor;