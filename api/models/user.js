const database = require('../database');
const IdGenerator = require('../idGenerator');

const idGenerator = new IdGenerator();

exports.signUp = function (user, cb) {
    database.get().collection('blog').insertOne(user, cb);
};

exports.getByEmail = function (email, cb) {
    database.get().collection('blog').findOne({email: email}, cb);
};

exports.generateToken = function (user, cb) {
    const token = idGenerator.getNewId();
    database.get().collection('blog').findAndModify({
        _id: user._id
    }, [], {$set: {
        token: token
    }}, {new: true, update: true}, cb);
};

exports.getAll = function (cb) {
    database.get().collection('blog').find(null, {articles: 0, passwordHash: 0, salt: 0, token: 0}).toArray(cb);
};

exports.getById = function (id, cb) {
    database.get().collection('blog').findOne({_id: id},{articles: 0, passwordHash: 0, salt: 0}, cb);
};

exports.getByToken = function (token, cb) {
    database.get().collection('blog').findOne({token: token}, {articles: 0, passwordHash: 0, salt: 0}, cb);
};

exports.logout = function (user, cb) {
    database.get().collection('blog').findAndModify({
        _id: user._id
    }, [], {$set: {
        token: null
    }}, {new: true, update: true}, cb);
};