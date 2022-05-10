const Cnpj = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('Cnpj', {
    id: {
      allowNull: false,
      autoIncrement: 437,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    cnpj: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    companyType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, { tableName: 'cnpjs', });

  return cnpj;
};

module.exports = Cnpj;