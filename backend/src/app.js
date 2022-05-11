const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OrderRoutes = require('./routes/OrderRoutes');
const CnpjRoutes = require('./routes/CnpjRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/orders', OrderRoutes);
app.use('/cnpjs', CnpjRoutes);

module.exports = app;