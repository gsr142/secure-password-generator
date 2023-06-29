// Assignment Code
var generateBtn = document.querySelector("#generate");
//declare variables
var pw = "password"
var pwChars = "abcdefghijklmnopqrstuvwxyz";
var upperCase = pwChars.toUpperCase();
var numbers = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function generatePassword() {

  //Gives user a prompt to enter character length
  var pwLength = prompt("Length (8-128 characters)"); 
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
  
  //converts pwLength from a string to an integer
  pwLength = parseInt(pwLength)
  
  //If user confirms use of capital letters in password, caps are added to pwChars
  var useCaps = confirm("Include Capital Letters?");
  if (useCaps == true) {
    pwChars = pwChars.concat(upperCase)
  }
  console.log(pwChars)

//If user confirms use of numbers in password, numbers are added to pwChars
  var useNums = confirm("Include Numbers?");
  if (useNums == true) {
    pwChars = pwChars.concat(numbers)
  }
console.log(pwChars)

  //If user confirms use of symbols in password, symbols are added to pwChars
  var useSymbols = confirm("Use Symbols?");
  if (useSymbols == true) {
    pwChars = pwChars.concat(symbols)
  }
console.log(pwChars)

  return pw
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

