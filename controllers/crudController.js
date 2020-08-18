const crudModel = require('../models/crudModel.js');
const platform = require('../platform.js');

var uniqid = require('uniqid');
var fs = require('fs');

exports.insert = async (req, res) => {
    let filename;
    if(req.files){
        var file = req.files.filename;
        var extension = req.files.filename.name.split('.');
        extension = extension[extension.length - 1];
        filename = `${uniqid()}.${extension}`;

        file.mv(platform.projectDir + "/images/" + filename, function(err){
            if(err) console.log(err);
        })
    }

    var data = {
        name: req.body.name, 
        email:req.body.email, 
        phonenumber: req.body.phonenumber,
        profile_picture: filename
    }

    let result = crudModel.insert(data);
    result.then(function(result){
        res.json({
            status: 200,
            success: true
        });
    }).catch(function(err){
        res.json({
            status: 500,
            success: false,
            message: err
        })
    })
}

exports.select = async (req, res) => {
    let result = crudModel.select();
    result.then(function(result){
        res.json({
            status: 200,
            success: true,
            return: result
        });
    }).catch(function(err){
        res.json({
            status: 500,
            success: false,
            message: err
        })
    })
}

exports.delete = async (req, res) => {
    var data = {
        id: req.body.id
    }

    let result = crudModel.selectbyID(data.id);
    result.then(function(result){
        fs.unlink(platform.projectDir + "/images/" + result.profile_picture, function(err){
            if(err) console.log(err);
       });  
    }).then(function(){
        crudModel.delete(data);
    }).catch(function(err){
        console.log(err);
    })
    
    res.redirect(`http://${platform.baseURL}:${platform.port}/select`);
}
