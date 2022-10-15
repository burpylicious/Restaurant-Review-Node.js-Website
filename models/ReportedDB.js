"use strict";

var db = require('../db-connections');
class ReportedDB{
    addReportedComment(commentID, callback){
        var sql = "INSERT INTO reported(comment_id) VALUES (?)";
        db.query(sql, [commentID], callback);
    }
}

module.exports = ReportedDB;