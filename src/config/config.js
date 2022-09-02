const dotenv = require('dotenv')

const Config = ()=>{
    dotenv.config();
    return{
        host : process.env.APP_HOST || 'localhost',
        port : process.env.APP_PORT || '8181',
        dbHost : process.env.DB_HOST || 'localhost',
        dbPost : process.env.DB_PORT || '5432',
        dbUser : process.env.DB_USER || 'postgres',
        dbPassword : process.env.DB_PASSWORD || '123456789',
        dbName : process.env.DB_NAME || 'university',
        dbDriver : process.env.DB_DRIVER || 'postgresql'
    }
}

module.exports = Config;