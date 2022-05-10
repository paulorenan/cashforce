const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    departament: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    verificationCode: {
      type: DataTypes.STRING(255),
      defaultValue: null,
      allowNull: true
    },
    emailChecked: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    cashforceAdm: {
      type: DataTypes.INTEGER(1),
      defaultValue: 0,
      allowNull: false
    }
  }, { tableName: 'users', });

  return user;
};

module.exports = User;
