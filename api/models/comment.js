/**
 * Created by dupon on 08/07/2017.
 */
const database = require('../database');

exports.getAllByArticle = function (url, cb) {
    database.get().collection('blog').aggregate([
            {
                "$unwind" : "$articles"
            },
            {
                "$unwind" : "$articles.comments"
            },
            {
                "$match": {"articles.url": "string"}
            },
            {
                "$group" : {
                    "_id" : "$articles.url",
                    "comments": {"$push": "$articles.comments"}
                }
            }
        ]).toArray(cb);
};

exports.post = function (url, comment, cb) {
    comment.datePublication = Date.now();
    database.get().collection('blog').updateOne({"articles.url": url}, {$push: {"articles.$.comments": comment}}, cb);
};