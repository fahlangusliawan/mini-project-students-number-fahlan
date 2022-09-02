const {Pool} = require('pg');
const Config = require('./config');

require('dotenv').config();
const { 
    host,
    port,
    dbHost,
    dbPost,
    dbUser,
    dbPassword,
    dbName,
    dbDriver
 } = Config();

const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPost}/${dbName}`
const db = new Pool({
    connectionString,
})

module.exports = { db };