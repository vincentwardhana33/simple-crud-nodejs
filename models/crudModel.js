const pool = require('../config/db.js');

exports.insert = (data) => {
    return new Promise(function(resolve, reject) {
        var sql = 'insert into data set ?';
        pool.query(sql, [data], (err, result)=> {
            if (err) reject(err);

            resolve(true);
        });
    });
};

exports.select = () => {
    return new Promise(function(resolve, reject) {
        var sql = 'select * from data';
        pool.query(sql, (err, result)=> {
            if (err) reject(err);

            resolve(result);
        })
    });
};

exports.delete = (data) => {
    return new Promise(function(resolve, reject) {
        var id = data.id;
        var sql = 'delete from data where id = ?';
        pool.query(sql, [id], (err, result)=> {
            if (err) reject(err);

            resolve(true);
        })
    });
};

exports.selectbyID = (id) => {
    return new Promise(function(resolve, reject) {
        var sql = `select * from data where id = ${id}`;
        pool.query(sql, (err, result)=> {
            if (err) reject(err);

            resolve(result[0]);
        })
    });
};
