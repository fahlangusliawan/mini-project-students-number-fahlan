const express = require('express');
const Config = require('../config/config');
const jsonMiddleware = require('./middleware/json.middleware')
const appRoute = require('./routes/app.routes');
const errorRoute = require('./routes/error.routes');
const errorMiddleware = require('./middleware/eror.middleware')
require('dotenv').config();
const {port,host} = Config();
const Server = () => {
    const app = express();
    app.use(jsonMiddleware);
    app.use(appRoute);
    app.use(errorRoute);
    app.use(errorMiddleware);
    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`);
    })
}

module.exports = Server