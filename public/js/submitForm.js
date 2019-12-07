"use strict";
/* JavaScript for form validaiton. */

// runs the function that runs the other function when the window is loaded
window.addEventListener("load", function() {
    document.getElementById("submitButton").onclick = runValidation;
    document.getElementById("name").oninput = nameVal;
    document.getElementById("phone").oninput = phoneVal;
    document.getElementById("mail").oninput = mailVal;
});


//runs through the functions in the documnet
function runValidation() {
    nameVal();
    phoneVal();
    mailVal();
}
// validates the name
function nameVal(name) {
    var name = document.getElementById("name");
    
    // tests if a value has been inputed and gives an error message if the input is missing
    if (name.validity.valueMissing) {
        name.setCustomValidity("Please input your first and last name");
    } else {
        name.setCustomValidity("");
    }
}

// phone number validation
function phoneVal () {
    var phoneNum = document.getElementById("phone");

    // tests if a value has been inputed and gives an error message if the input is missing
    if (phoneNum.validity.valueMissing) {
        phoneNum.setCustomValidity("Please put in your phone number.");
    } else {
        phoneNum.setCustomValidity("");
    }
}

// validate the e-mail 
function mailVal() {
    var mail = document.getElementById("mail");
    

    // tests if a value has been inputed and gives an error message if the input is missing
    if (mail.validity.valueMissing) {
        mail.setCustomValidity("Please input an email");
    } else {
        mail.setCustomValidity("");
    }
}