//const form = document.getElementById('form');


userN = "name";
psw = "password";

function validate(){
const username = document.getElementById('username');
const password = document.getElementById('password');
const thelogin = document.querySelector("login");
const cancel = document.getElementById('button');

    if(username.value === usern && password.value=== psw){
        alert(username.value)
    }
    else{
        validate();
    }
}
// action = "Main.html"
// thelogin.addEventListener("click", validate, false)