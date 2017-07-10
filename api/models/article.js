/**
 * Created by dupon on 08/07/2017.
 */
const database = require('../database');

exports.getAll = function (cb) {
    database.get().collection('blog').aggregate(
        [
            {
                "$unwind" : "$articles"
            },
            { "$project": {
                
        "article": "$articles",
        "name": 1,
        "email": 1
    }}
        ]).toArray(cb);
};

exports.getByUrl = function (url, cb) {
    database.get().collection('blog').aggregate([
            {
                "$unwind" : "$articles"
            },
            {
                "$match": {"articles.url": url}
            },
            { "$project": {
                        
                "article": "$articles",
                "name": 1,
                "email": 1
            }}
        ]).toArray(cb);
};

exports.post = function (token, article, cb) {
    article.datePublication = Date.now();
    database.get().collection('blog').updateOne({token: token}, {$push: {articles: article}}, cb);
};

exports.getByUserEmail = function (email, cb) {
    database.get().collection('blog').aggregate(
        [
            {
                "$unwind" : "$articles"
            },
            {
                "$match": {"email": email}
            },
            {
                "$group" : {
                    "_id" : 0,
                    "articles": {$push: "$articles"}
                }
            }
        ]).toArray(cb);
};