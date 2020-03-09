'use strict'
const express = require('express');
const apiRoute = require('./api/api');
const appMiddleware = require('./middleware/app');
const app = express();

//set application level middleware
app.use(appMiddleware());
//set router
app.use('/api', apiRoute);

module.exports = app;