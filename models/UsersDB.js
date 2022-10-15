"use strict";

var db = require('../db-connections');
class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * from restaurant_review.user";
        db.query(sql, callback);
    }

    loginUser(username,callback){
        var sql = "SELECT password from restaurant_review.user WHERE username = ?";
        db.query(sql,[username], callback);
    }
    
    updateUser(user, callback){
        var sql = "UPDATE user SET username = ?, password= ? WHERE _id = ?";
        return db.query(sql, [user.getusername(), user.getpassword(), user.getId()], callback);
    }

    addUser(username,first_name,last_name,gender,address,mobile_number,email_address,password, callback){
        var sql="INSERT INTO user (username,first_name,last_name,gender,address,mobile_number,email_address,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [username,first_name,last_name,gender,address,mobile_number,email_address,password], callback);
    }

    deleteUser(username, callback){
        var sql = "DELETE from user WHERE _id = ?";
        return db.query(sql, [username], callback);
    }
}

module.exports = UsersDB;