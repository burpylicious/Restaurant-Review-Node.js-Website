"use strict"

const CommentsDB = require('../models/CommentsDB');
const Comment = require('../models/Comment');
const User = require('../models/User');

var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    commentsDB.getAllComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addComment(request, respond){
    var now = new Date();
    var comment = new Comment(null, request.body.restaurantId, request.body.restaurant, request.body.review, 
        request.body.username, request.body.rating, now);
    commentsDB.addComment(comment, function (error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getReportedComments(request, respond){
    var user = new User();
    user.username = request.params.username;
    commentsDB.getReportedComments(user.username, function (error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id), request.body.restaurantId, request.body.resturant, request.body.review, request.body.username, request.body.rating, now);
    commentsDB.updateComment(comment, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentID = request.params.id;
    commentsDB.deleteComment(commentID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getDescSortedComments(request, respond){
    commentsDB.getDescSortedComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
});
}

function getAscSortedComments(request, respond){
    commentsDB.getAscSortedComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
});
}

function updateFlagged(request, respond){
    commentsDB.updateFlagged(parseInt(request.params.id), function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
module.exports = {getAllComments, addComment, updateComment, deleteComment, getDescSortedComments, getAscSortedComments, getReportedComments, updateFlagged};