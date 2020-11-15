console.log("Welcome to Email RegExp");
var prompt = require('prompt-sync')();
var email = prompt('Enter Email Here: ');
// UC1
var emailRegEx =new RegExp("^[a-zA-Z0-9]{3}$");
if(emailRegEx.test(email)) {
    console.log("Email: "+email+" is Valid.");
} else {
    console.log("Email: "+email+" is Invalid.");
}