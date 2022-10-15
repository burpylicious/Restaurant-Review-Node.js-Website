function loginMe(){

    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://localhost:8080/login", true)
    loginUser.setRequestHeader("Content-Type","application/json")
    loginUser.onload=function (){
        var token = JSON.parse(loginUser.responseText);
        console.log(token.result);
        if(token.result != "invalid"){
            document.getElementById('modal_container').style='pointer-events:auto; opacity: 1;';
            sessionStorage.setItem("token", token.result);
            //sessionStorage.setItem("userName", username);
        }
        else{
            document.getElementById('modal_container2').style='pointer-events:auto; opacity: 1;';
        }
    }   


var username= document.getElementById("usernameLogin").value;
var password= document.getElementById("passwordLogin").value;
var payload = {username:username, password:password}
loginUser.send(JSON.stringify(payload));

}