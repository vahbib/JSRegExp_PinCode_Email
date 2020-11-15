console.log("Welcome to Email RegExp");
var prompt = require('prompt-sync')();
var email = prompt('Enter Email Here: ');
// UC1
var emailRegExUc1 =new RegExp("^[a-zA-Z0-9]{3,}$");
if(emailRegExUc1.test(email)) {
    console.log("UC1: Email: "+email+" is Valid.");
} else {
    console.log("UC1: Email: "+email+" is Invalid.");
}
// UC2
var emailRegExUc2 =new RegExp("^[a-zA-Z0-9]+@$");
if(emailRegExUc2.test(email)) {
    console.log("UC2: Email: "+email+" is Valid.");
} else {
    console.log("UC2: Email: "+email+" is Invalid.");
}
// UC3
var emailRegExUc3 =new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$");
if(emailRegExUc3.test(email)) {
    console.log("UC3: Email: "+email+" is Valid.");
} else {
    console.log("UC3: Email: "+email+" is Invalid.");
}
// UC4
var emailRegExUc4 =new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)$");
if(emailRegExUc4.test(email)) {
    console.log("UC4: Email: "+email+" is Valid.");
} else {
    console.log("UC4: Email: "+email+" is Invalid.");
}
// UC5
var emailRegExUc5 =new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*$");
if(emailRegExUc5.test(email)) {
    console.log("UC5: Email: "+email+" is Valid.");
} else {
    console.log("UC5: Email: "+email+" is Invalid.");
}