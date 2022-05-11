const CnpjService = require('../services/CnpjService');

const getCnpjById = async (req, res) => {
  const paramCnpj = req.params.id;
  const cnpj = await CnpjService.getCnpjById(paramCnpj);
  res.status(200).json(cnpj);
};

module.exports = { getCnpjById };