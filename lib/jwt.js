const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

exports.Encode = (data) => {
    return jwt.sign(data, jwtConfig.secretKey);
};

exports.Decode = (token) => {
    return jwt.verify(token, jwtConfig.secretKey);
};
