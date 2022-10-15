"use strict";

var db = require('../db-connections');
class CommentsDB{
    getAllComments(callback){
        var sql = "SELECT * from restaurant_review.comment WHERE flagged = 0";
        db.query(sql, callback);
    }
    addComment(comment, callback){
        var sql = "INSERT INTO comment(restaurantId, restaurant, review, username, rating, datePosted) SELECT ?, ?, ?, ?, ?, ? FROM dual WHERE NOT EXISTS (SELECT * from comment c WHERE (c.username = ? AND c.restaurant = ?) OR (c.username = ? AND flagged = 1))";
        db.query(sql, [comment.getrestaurantId(), comment.getrestaurant(), comment.getReview(), comment.getUsername(), comment.getRating(), comment.getDatePosted(), comment.getUsername(), comment.getrestaurant(), comment.getUsername()], callback);
    }

    updateComment(comment, callback){
        var sql = "UPDATE comment SET review = ?, username= ?, rating = ?, datePosted = ? WHERE _id = ?";
        return db.query(sql, [comment.getReview(), comment.getUsername(), comment.getRating(), 
        comment.getDatePosted(), comment.getId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE _id = ?";
        return db.query(sql, [commentID], callback);
    }

    getDescSortedComments(callback){
        var sql = "SELECT * FROM restaurant_review.comment ORDER BY datePosted DESC";
        db.query(sql, callback);
    }

    getAscSortedComments(callback){
        var sql = "SELECT * FROM restaurant_review.comment ORDER BY datePosted ASC";
        db.query(sql, callback);
    }

    getReportedComments(username, callback){
        var sql = "SELECT user.username, review FROM comment JOIN user ON comment.username = user._id JOIN reported ON comment._id = reported.comment_id";
        return db.query(sql, [username], callback);
    }

    updateFlagged(comment_id, callback){
        var sql = "UPDATE comment SET flagged = 1 WHERE _ID = ?";
        return db.query(sql, [comment_id], callback);
    }
}

module.exports = CommentsDB;