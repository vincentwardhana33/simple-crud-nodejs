const authModel = require('../models/authModel');

exports.login = async (req, res) => {
    let adminID = authModel.Login(req.body.username, req.body.password);
    adminID.then(function(result){
        if (result.length > 0){
            // berhasil login
            console.log(result[0].id);
            // call JWT -> generate token

            res.json({
                code: 200,
                success: true,
                token: ""
            })
        } else {
            // gagal login
            console.log(result);
            res.json({
                code: 200,
                success: true
            })
        }
    }).catch(function(err){
        console.log(err);
        res.json({
            code: 500,
            success: false
        })
    })
}