// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", showPrompts);


function showPrompts (){
  var enterLength = prompt("How many characters? (8-128)");
  var confirmUpper = confirm("UPPER CASE?");
  var confirmLower = confirm("lower case?");
  var confirmNum = confirm("Numb3rs?");
  var confirmSym = confirm("$ymbo|s?");
  console.log (enterLength)
  console.log (confirmUpper);
  console.log (confirmLower);
  console.log (confirmNum);
  console.log (confirmSym);
  

  
}
