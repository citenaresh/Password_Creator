

// Start working code
// User input variables: 
var confirmUppercase;
var passLength;
var confirmNumber;
var choices;
var confirmCharacter;
var confirmLowercase;

// Start Password variable values: 
// Special characters 
sCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// blankArr is for the Uppercase conversion
blankArr = [];
// converts letters to uppercase 
var allCaps = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphaUp = alpha.map(allCaps);

var btncreate = document.querySelector("#create");

btncreate.addEventListener("click", function () {
    pw = createPassword();
    document.getElementById("password").placeholder = pw;
});

// Start function to create password
function createPassword() {
    // Asks for user input
    passLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!passLength) {
        alert("This needs a value");
    } else if (passLength < 8 || passLength > 128) {
        // Validates user input
        // Start user input prompts
        passLength = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?"); 
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = sCharacter.concat(number, alpha, alphaUp);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = sCharacter.concat(number, alphaUp);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = sCharacter.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = sCharacter.concat(alpha, alphaUp);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alphaUp);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = sCharacter.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = sCharacter.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = sCharacter.concat(alphaUp);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alphaUp);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUp);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = sCharacter;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created blankArr variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = blankArr.concat(alphaUp);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < passLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var pw = password.join("");
    UserInput(pw);
    return pw;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(pw) {
    document.getElementById("password").textContent = pw;

}

var copy = document.querySelector("#copybtn");
copy.addEventListener("click", function () {
    copyPassword();
});
// This copies the password value - works
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
