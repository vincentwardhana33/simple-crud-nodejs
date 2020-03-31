const pool = require('../config/db.js');

exports.insert = (data) => {
    return new Promise(function(resolve) {
        var sql = 'insert into data set ?';
        pool.query(sql, [data], (err, result)=>
        {
            if (err) throw err;

            resolve(err);
        })
    });
};

exports.select = () => {
    return new Promise(function(resolve) {
        var sql = 'select * from data';
        pool.query(sql, (err, result)=>
        {
            if (err) throw err;

            resolve(result);
        })
    });
};

exports.delete = (data) => {
    var id = data.id;
    var sql = 'delete from data where id = ?';
    pool.query(sql, [id], (err, result)=>
    {
        if (err) throw err;
    })
};
