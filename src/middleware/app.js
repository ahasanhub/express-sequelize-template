const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const appMiddleware = () => [
    cors(),
    morgan('dev'),
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json()
];
module.exports = appMiddleware;