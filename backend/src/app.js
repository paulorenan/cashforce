const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OrderRoutes = require('./routes/OrderRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/orders', OrderRoutes);

module.exports = app;