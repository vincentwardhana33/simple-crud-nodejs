const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: '',
    user: '',
    password: '',
    database: '',
    port: ''
});

module.exports = pool;
