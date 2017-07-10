/**
 * Created by dupon on 06/07/2017.
 */
const User = require('../models/user');
const H = require('../hashsalt');
const UtilController = require('./utilController');

exports.signUp = function (req, res) {
    const user = {};
    const hashSalt = H.getSaltHash(req.body.password);
    user.name = req.body.name;
    user.email = req.body.email;
    user.passwordHash = hashSalt.passwordHash;
    user.salt = hashSalt.salt;
    User.signUp(user, function (err, result) {
        User.generateToken(user, function (err, result) {
                    console.log(result);
                    cleanUser(result.value);
                    res.json(result.value);
        });
    });
};

exports.login = function (req, res) {
    const password = req.body.password;
    User.getByEmail(req.body.email, function (err, result) {
        if (err) {
            UtilController.error(res, err);
        } else if (result === null) {
            UtilController.error(res, 'User has not been found', 401);
        } else {
            if (H.sha512(password, result.salt).passwordHash === result.passwordHash) {
                User.generateToken(result, function (err, result) {
                    cleanUser(result.value);
                    res.json(result.value);
                });
            } else {
                UtilController.error(res, 'Bad password', 401);
            }
        }
    });
};

exports.getAll = function (req, res) {
    User.getAll(function (err, result) {
        if (err) console.log(err);
        if (result) {
            res.json(result)
        } else {
            UtilController.error(res, 'No user found');
        }
    });
};

exports.logout = function (req, res) {
    const message = {'Logout': 'Succesful'};
    User.getByToken(req.params.token, function (err, result) {
        if (err) {
            UtilController.error(res, err);
        }
        if (result && result._id !== null) {
            User.logout(result, function (err, result) {
                if (err) {
                    UtilController.error(res, err);
                }
                if (result) {
                    res.json(message)
                } else {
                    UtilController.error(res, 'Logout has failed');
                }
            })
        } else {
            UtilController.error(res, 'Logout has failed');
        }
    })

};

exports.getById = function (req, res) {
    User.getById(req.params.id, function (err, user) {
        if (err) {
            UtilController.error(res, err);
        }
        if (user) {
            res.json(user);
        } else {
            UtilController.error(res, req.params.id + ' is not a valid id');
        }
    })
};

exports.isAuth = function (req, res) {
    User.getByToken(req.params.token, function (err, user) {
        if (err) {
            UtilController.error(res, err);
        }
        if (user) {
            res.json(user);
        } else {
            UtilController.error(res, req.params.token + ' is not a valid token');
        }
    });
};

const cleanUser = function (user) {
    delete user.passwordHash;
    delete user.salt;
    delete user.articles;
};