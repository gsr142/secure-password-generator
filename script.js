// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var pw = "password"
  var pwLength = prompt("Length (8-128 characters)"); //Gives user a prompt to enter character lenght
  isValidInput = false;

  //While loop checks if the user entered something and clicked OK
  while (!isValidInput) {
    if (pwLength === null) {
      break;
    }
    //if/else checks that the user entered a number from 8-128, and prompts the user to re-enter the password length if they did not meet these requirements
    if (!isNaN(parseFloat(pwLength)) && isFinite(pwLength) && pwLength > 7 && pwLength < 129) {
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

