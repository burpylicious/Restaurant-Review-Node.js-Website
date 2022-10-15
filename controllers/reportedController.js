"use strict"

const ReportedDB = require('../models/ReportedDB');

var reportedDB = new ReportedDB();

function addReportedComment(request, respond){
    var comment_id = request.params.id
    reportedDB.addReportedComment(comment_id, function (error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
module.exports = {addReportedComment};