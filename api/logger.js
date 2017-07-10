/**
 * Created by dupon on 24/04/2017.
 */
const util = require("util");
const colors = require('colors');

const getCurrentDateInString = function () {
    const date = new Date();
    const n = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return n + ' ' + time;
};

exports.log = function () {
    if (arguments.length > 0) {
        const myDate = getCurrentDateInString();
        let message = '';
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string' || arguments[i] instanceof String) {
                message += arguments[i];
            } else {
                message += util.inspect(arguments[i]);
            }
            if (i !== arguments.length - 1) {
                message += ' ';
            }
        }
        console.log('(debug) '.white + myDate.green + ' - ' + message);
    }
};

exports.error = function (text) {
    let myDate = getCurrentDateInString();
    console.log('(error) '.red + myDate.green + ' - ' + text);
};