function registerMe(){

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "http://localhost:8080/Adduser", true)
    registerUser.setRequestHeader("Content-Type","application/json")
    registerUser.onload=function (){
        console.log("ok");
    }


var username= document.getElementById("username").value;
var first_name= document.getElementById("first-name").value;
var last_name= document.getElementById("last-name").value;
var gender = document.getElementById("gender").value;
var address= document.getElementById("address").value;
var mobile_number= document.getElementById("mobile_number").value;
var email_address= document.getElementById("email_address").value;
var password= document.getElementById("password").value;
var payload = {username:username, first_name:first_name, last_name:last_name, gender:gender,address:address, mobile_number:mobile_number, email_address:email_address, password:password}
registerUser.send(JSON.stringify(payload));

}