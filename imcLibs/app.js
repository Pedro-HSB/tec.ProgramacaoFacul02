const express = require('express');
const router = require('./rotas/index');

const app = express();
app.use('/', router);

module.exports = app;