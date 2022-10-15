"use strict";

var db = require('../db-connections');
class ExplicitDB{
    getAllExplicits(callback){
        var sql = "SELECT * from restaurant_review.explicit";
        db.query(sql, callback);
    }

    checkExplicits(word, callback){
        var sql = "SELECT COUNT(*) AS COUNT from explicit WHERE explicit_words IN (?)";
        db.query(sql, [word], callback);
    }
}

module.exports = ExplicitDB;