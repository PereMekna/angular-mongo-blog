/**
 * Created by dupon on 08/07/2017.
 */
const Comment = require('../models/comment');
const User = require('../models/user');
const UtilController = require('./utilController');

exports.getAllByArticle = function (req, res) {
    const url = req.params.url;
    if (url) {
        Comment.getAllByArticle(url, function (err, result) {
            if (err) {
                UtilController.error(res, err);
            }
            if (result && result[0].comments) {
                res.json(result[0].comments);
            } else {
                UtilController.error(res, 'No comments found');
            }
        });
    } else {
        UtilController.error(res, 'No url was specified');
    }
};

exports.post = function (req, res) {
    const token = req.params.token;
    const url = req.params.url;
    const comment = req.body;
    if (token && url && comment) {
        User.getByToken(req.params.token, function (err, user) {
            if (err) {
                UtilController.error(res, err);
            }
            if (user) {
                comment.name = user.name;
                comment.authorId = user._id.toString();
                Comment.post(url, comment, function (err, result) {
                    if (err) UtilController.error(err);
                    if (result) {
                        res.json(result);
                    } else {
                        UtilController.error('An error occurred while updating collection')
                    }
                })
            } else {
                UtilController.error(res, req.params.token + ' is not a valid token');
            }
        });
    } else {
        UtilController.error(res, 'Token, url or comment is missing');
    }
};