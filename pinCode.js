console.log("Welcome to PinCode RegExp");
var prompt = require('prompt-sync')();
var pin = prompt('Enter PinCode Here: ');
// UC1
var pinCodeRegExUc1 =new RegExp("^[0-9]{6}$");
if(pinCodeRegExUc1.test(pin)) {
    console.log("UC1: Pin Code: "+pin+" is Valid.");
} else {
    console.log("UC1: Pin Code: "+pin+" is Invalid.");
}
// UC2
var pinCodeRegExUc2 =new RegExp("^[^a-zA-z@][0-9]{6}$");
if(pinCodeRegExUc2.test(pin)) {
    console.log("UC2: Pin Code: "+pin+" is Valid.");
} else {
    console.log("UC2: Pin Code: "+pin+" is Invalid.");
}
// UC3
var pinCodeRegExUc3 =new RegExp("^[^a-zA-z@][0-9]{6}[^a-zA-z@]$");
if(pinCodeRegExUc3.test(pin)) {
    console.log("UC3: Pin Code: "+pin+" is Valid.");
} else {
    console.log("UC3: Pin Code: "+pin+" is Invalid.");
}