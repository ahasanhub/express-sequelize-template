'use strict'
//Environment variable config
require('dotenv').config();
// server setup
const config = require('./src/config/config');
const app = require('./src/app');
const logger = require('./src/utils/logger');


app.listen(config.port, () => console.log(`Server is running on port ${config.port}`));
logger.log('listening on http://localhost:' + config.port);