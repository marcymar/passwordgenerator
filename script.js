// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var special = ['+', '-', '&', '!', '^', '~', '*', '?', ':']

var randomPass = []
var characters = ['.']
var pass = []

const fabricatePassword = () => {
    alert("let's make a password");

    passLength = prompt("How long do you want your password to be? \nChoose between 8 and 128 characters.")
    if (passLength < 8 || passLength > 128) {
        alert("Please choose a number between 8 and 128.")
    }

    if (confirm("Do you want to add uppercase characters?\nConfirm for yes, cancel for no.")) {
        upperCase = upperCase.concat(characters)
        randomPass.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    }

    if (confirm("Do you want to add lowercase characters?\nConfirm for yes, cancel for no.")) {
        lowerCase = lowerCase.concat(characters)
        randomPass.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    }

    if (confirm("Do you want to add number characters?\nConfirm for yes, cancel for no.")) {
        number = number.concat(characters)
        randomPass.push(number[Math.floor(Math.random() * number.length)])
    }

    if (confirm("Do you want to add special characters?\nConfirm for yes, cancel for no.")) {
        special = special.concat(characters)
        randomPass.push(special[Math.floor(Math.random() * special.length)])
    }

    for (let i = 0; i < length; i++) {
        pass.push(characters[Math.floor(Math.random() * characters.length)])
    }

    for (let i = 0; i < randomPass.length; i++) {
        characters[i] = randomPass[i]
    }
    console.log(characters)
}
// Write password to the #password input
document.getElementById('generate').addEventListener('click', function () {
    let password = fabricatePassword()

    document.getElementById('password').textContent = password

    document.getElementById('password').innerHTML = characters;
})


// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);