const { Cnpj } = require('../models')

const getCnpjById = async (id) => {
  const cnpj = await Cnpj.findByPk(id);
  return cnpj;
};

module.exports = { getCnpjById };