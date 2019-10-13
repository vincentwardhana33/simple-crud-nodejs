const crudModel = require('../models/crudModel.js');
const platform = require('../platform.js');

exports.insert = async (req, res) => {
    var data = 
    {
        name: req.body.name, 
        email:req.body.email, 
        phonenumber: req.body.phonenumber
    }

    crudModel.insert(data);
    
    res.end();
}

exports.select = async (req, res) => {
    let result = await crudModel.select();
    
    res.json(result);
}

exports.delete = async (req, res) => {
    var data = 
    {
        id: req.body.id
    }

    await crudModel.delete(data);
    
    res.redirect(`http://${platform.baseURL}:${platform.port}/select`);
}
