/**
 * Created by dupon on 23/04/2017.
 */
const console = require('../logger');

exports.tokenValidityDays = 3;

exports.cors = function (res) {
    res.status(200);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Max-Age', 3600);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept");
};

exports.error = function (res, message, status) {
    let errorObject = {'error': 'Something went wrong.'};
    res.status(403);
    if (status) res.status(status);
    if (message) {
        errorObject.message = message;
    }
    console.error(message);
    res.json(errorObject);
};