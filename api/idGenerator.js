/**
 * Created by dupon on 21/04/2017.
 */
const crypto = require('crypto');

function IDGenerator() {

}

IDGenerator.prototype.getNewId = function () {
    return generate();
};

const generate = function () {
    return crypto.createHmac('sha256', Math.random().toString(36))
        .update('I love cupcakes')
        .digest('hex').substr(2, 32);
};

module.exports = IDGenerator;