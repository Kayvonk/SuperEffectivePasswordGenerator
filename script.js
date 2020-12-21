
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

  var length = prompt("How many characters do you want your password to be?");
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a number between 8 and 128")
    return ""
  }
  var symbolconfirm = confirm("Do you want it to include special characters?");

  var uppercaseconfirm = confirm("Do you want it to include uppercase letters?");

  var lowercaseconfirm = confirm("Do you want it to include lowercase letters?");

  var numbersconfirm = confirm("Do you want it to include numbers?");
  if (!symbolconfirm && !uppercaseconfirm && !lowercaseconfirm && !numbersconfirm) {
    alert("Please select at least one character type")
    return ""
  }
  if (symbolconfirm) {
    characters = characters + symbols
  }
  if (uppercaseconfirm) {
    characters = characters + uppercase
  }
  if (lowercaseconfirm) {
    characters = characters + lowercase
  }
  if (numbersconfirm) {
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


