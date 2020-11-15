console.log("Welcome to PinCode RegExp");
var prompt = require('prompt-sync')();
var pin = prompt('Enter PinCode Here: ');
// UC1
var pinCodeRegEx =new RegExp("^[0-9]{6}$");
if(pinCodeRegEx.test(pin)) {
    console.log("Pin Code: "+pin+" is Valid.");
} else {
    console.log("Pin Code: "+pin+" is Invalid.");
}