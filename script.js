// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var pw = "password"
  var pwChars = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = pwChars.toUpperCase()
  var numbers = "0123456789"
  var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

  pwLength = prompt("Length (8-128 characters)"); //Gives user a prompt to enter character length
  isValidInput = false;

  //While loop checks if the user entered something and clicked OK
  while (isValidInput === false) {
    //if/else checks that the user entered a number from 8-128, and prompts the user to re-enter the password length if they did not meet these requirements
    if (Number.isInteger(parseFloat(pwLength)) && pwLength > 7 && pwLength < 129) {
      isValidInput = true;
    }
    else {
      alert("Invalid entry. Please enter a number 8-128.");
      pwLength = prompt("Length (8-128 characters)");
    }
  }
  
  var useCaps = confirm("Include Capital Letters?");
  var useNums = confirm("Include Numbers?");
  var useSymbols = confirm("Use Symbols?");

  return pw
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

