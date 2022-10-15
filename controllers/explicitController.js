"use strict"
const ExplicitsDB = require('../models/ExplicitsDB');

var explicitDB = new ExplicitsDB();

function getAllExplicits(request, respond){
    explicitDB.getAllExplicits(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function checkExplicits(request, respond){
    var r = request.params.review;
    var review_words = r.split(" ");
//    var count = checkExplicits(review_words);
//    explicitComment = 0;
//    if (count == 0){
//        explicitComment = 1;
//        }
    explicitDB.checkExplicits(review_words, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllExplicits, checkExplicits};