const CnpjController = require('../controllers/CnpjController');
const { Router } = require('express');

const CnpjRouter = Router();

CnpjRouter.get('/:id', CnpjController.getCnpjById);

module.exports = CnpjRouter;