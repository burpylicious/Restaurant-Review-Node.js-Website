"use strict"
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
var secret="somesecretkey"

var usersDB = new UsersDB();

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function loginUser(request, respond){

    var username = request.body.username;
    var password = request.body.password;
    usersDB.loginUser(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            const hash = result[0].password
            var flag = bcrypt.compareSync(password, hash)
            if (flag){
                var token=jwt.sign(username, secret);
                respond.json({result:token});
            } else {
                respond.json({result:"invalid"});
            }
        }
    })
}


function updateUser(request, respond){
    var now = new Date();
    var user = new User(parseInt(request.params.id), request.body.username, null, null, null, null, null, null, request.body.password);
    usersDB.updateUser(user, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){
    var username = request.body.username;
    var first_name = request.body.first_name; 
    var last_name = request.body.last_name; 
    var gender = request.body.gender; 
    var address = request.body.address; 
    var mobile_number = request.body.mobile_number; 
    var email_address = request.body.email_address; 
    var password = request.body.password; 
    password=bcrypt.hashSync(password,10);
    usersDB.addUser(username,first_name, last_name,gender, address,mobile_number,email_address,password, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
        })
    }

function deleteUser(request, respond){
    var username = request.params.id;
    usersDB.deleteUser(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers, updateUser, addUser, deleteUser, loginUser};


