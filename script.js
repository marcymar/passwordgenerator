// Assignment Code
function generate() {
    // var generateBtn = document.querySelector("#generate");


    // set password length
    let complexity = document.getElementById("slider").value;


    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$?&*()[]{}^~";

    let password = "";

    // for loop to choose pw characters
    for (var i = 1; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    // add pw to textbox
    document.getElementById("generate").value = password;
    document.getElementById("password").innerHTML += password;

    // add password to previous pw section
    document.getElementById("lastpw").innerHTML += password + "<br>";
}

// default length display of slider 60
document.getElementById("length").innerHTML = "Length: 60";

// function to set slider
document.getElementById("slider").oninput = function () {

    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";
    }

    // Write password to the #password input
    // function writePassword() {
    //     var password = generatePassword();
    //     var passwordText = document.querySelector("#password");

    //     passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
