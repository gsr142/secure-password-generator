// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //declare variables inside generate password so that pwChars resets to default with out having to refresh web page
  var pw = "";
  var pwChars = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var numbers = "0123456789";
  var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

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
  pwLength = parseInt(pwLength);

  //If user confirms use of lower case letters in password, lower case letters are added to pwChars, and a random lower case letter is added to the password. This ensures that at least one character from this category will be included in the password
  var useLower = confirm("Include Lowercase Letters?")
  if (useLower == true) {
    pwChars = pwChars.concat(lowerCase);
    pw += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
  }
  console.log(pw)

  //If user confirms use of capital letters in password, caps are added to pwChars, and a random capital letter is added to the password. This ensures that at least one character from this category will be included in the password
  var useCaps = confirm("Include Capital Letters?");
  if (useCaps == true) {
    pwChars = pwChars.concat(upperCase);
    pw += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
  }
  console.log(pw)
  //If user confirms use of numbers in password, numbers are added to pwChars, and a random number is added to the password. This ensures that at least one character from this category will be included in the password
  var useNums = confirm("Include Numbers?");
  if (useNums == true) {
    pwChars = pwChars.concat(numbers);
    pw += numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
  console.log(pw)
  //If user confirms use of symbols in password, symbols are added to pwChars, and a random symbol is added to the password. This ensures that at least one character from this category will be included in the password
  var useSymbols = confirm("Use Symbols?");
  if (useSymbols == true) {
    pwChars = pwChars.concat(symbols)
    pw += symbols.charAt(Math.floor(Math.random() * symbols.length))
  }
  
  //randomly selects characters that fit the user's parameters and adds them to the password, until the preferred length is reached.
  for (let i = pw.length-1; i < pwLength-1; i++) {
    pw += pwChars.charAt(Math.floor(Math.random() * pwChars.length));
  }
  
  return pw;
}

//Writes generated password in textbox on page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

