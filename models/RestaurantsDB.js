"use strict";

var db = require('../db-connections');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * FROM restaurant_review.restaurant";
        db.query(sql, callback);
    }

    searchRestaurants(keyword, callback){
        var key = "%" + keyword + "%";
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE name like ?";
        db.query(sql,[key], callback);
    }
}

module.exports = RestaurantsDB;