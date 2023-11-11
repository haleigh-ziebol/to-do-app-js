const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5430,
    user: 'postgres',
    password: '0099',
    database: 'weekend-to-do-app', 
});

module.exports = pool;
