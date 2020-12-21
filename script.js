
var lowercase = "abcdefghijklmnopqrstuvqxyz";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "0123456789";

var symbols = "!@#$%^&*()_+-=~?";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}
function generatePassword() {
  var characters = ""

  var length = prompt("How many characters do you want your password to be? (minimum length: 8, maximum length: 128)");
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a number between 8 and 128")
    var length = prompt("How many characters do you want your password to be? (minimum length: 8, maximum length: 128)");
    if (length < 8 || length > 128 || isNaN(length))
      return ""
  }
  var symbolConfirm = confirm("Do you want to allow special characters?");

  var uppercaseConfirm = confirm("Do you want to allow uppercase letters?");

  var lowercaseConfirm = confirm("Do you want to allow lowercase letters?");

  var numbersConfirm = confirm("Do you want to allow numbers?");
  if (!symbolConfirm && !uppercaseConfirm && !lowercaseConfirm && !numbersConfirm) {
    alert("Please select at least one character type")

    var symbolConfirm = confirm("Do you want to allow special characters?");

    var uppercaseConfirm = confirm("Do you want to allow uppercase letters?");

    var lowercaseConfirm = confirm("Do you want to allow lowercase letters?");

    var numbersConfirm = confirm("Do you want to allow numbers?");
  }
  if (symbolConfirm) {
    characters = characters + symbols
  }
  if (uppercaseConfirm) {
    characters = characters + uppercase
  }
  if (lowercaseConfirm) {
    characters = characters + lowercase
  }
  if (numbersConfirm) {
    characters = characters + numbers
  }
  var password = ""
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length)
    var randomCharacter = characters.charAt(randomIndex)
    password = password + randomCharacter
  }
  return password
}

generateBtn.addEventListener("click", writePassword);


