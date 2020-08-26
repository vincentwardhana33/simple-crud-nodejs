const pool = require('../config/db.js');

exports.Login = (username, password) => {
    return new Promise(function(resolve, reject) {
        var sql = `select id, username from admin_login where username = '${username}' and password = '${password}'`;
        pool.query(sql, (err, result)=> {
            if (err) reject(err);

            resolve(result);
        });
    });
};
