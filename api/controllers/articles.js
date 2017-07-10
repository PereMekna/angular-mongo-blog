/**
 * Created by dupon on 08/07/2017.
 */
const Article = require('../models/article');
const UtilController = require('./utilController');
const validator = require('validator');



exports.getAll = function (req, res) {
    Article.getAll(function (err, result) {
        if (err) {
            UtilController.error(res, err);
        }
        console.log(result);
        if (result) {
            res.json(result);
        } else {
            UtilController.error(res, 'No articles found');
        }
    })
};

exports.getByUrl = function (req, res) {
    const url = req.params.url;
    if (url) {
        Article.getByUrl(url, function (err, result) {
            if (err) {
                UtilController.error(res, err);
            }
            console.log(result);
            if (result && result[0]) {
                res.json(result[0]);
            } else {
                UtilController.error(res, 'The article at the url "' + url + '" has not been found');
            }
        });
    } else {
        UtilController.error(res, 'No url was specified');
    }
};

exports.post = function (req, res) {
    const token = req.params.token;
    const article = req.body;
    if (token && article) {
        Article.getByUrl(article.url, function (err, result) {
            if (err) {
                UtilController.error(res, err);
            }
            if (result.length > 0) {
                console.log(result);
                UtilController.error(res, 'URL already taken');
            } else {
                Article.post(token, article, function (err, result) {
                    if (err) {
                        UtilController.error(res, err);
                    }
                    if (result) {
                        res.json(result);
                    } else {
                        UtilController.error(res, 'Something didn\'t work as expected');
                    }
                })
            }
        });
    } else {
        UtilController.error(res, 'No token or no article was specified')
    }
};

exports.getByUserEmail = function (req, res) {
    const email = req.params.email;
    if (email && validator.isEmail(email)) {
        Article.getByUserEmail(email, function (err, result) {
            if (err) {
                UtilController.error(res, err);
            }
            if (result && result[0].articles) {
                res.json(result[0].articles);
            } else {
                UtilController.error(res, 'Something didn\'t work as expected');
            }
        });
    } else {
        UtilController.error(res, 'No email was specified')
    }
};