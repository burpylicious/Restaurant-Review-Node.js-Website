"use strict"
const RestaurantsDB = require('../models/RestaurantsDB');

var restaurantDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function searchRestaurants(request, respond){
    var searchTerm = request.body.search;
    restaurantDB.searchRestaurants(searchTerm, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllRestaurants, searchRestaurants};