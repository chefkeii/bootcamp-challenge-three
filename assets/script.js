const generateBtn = document.querySelector("#generate");
const passwordEl = document.querySelector("#password");

generateBtn.addEventListener("click", function() {
  let passwordLength = parseInt(
    prompt("Enter the length of the password (min 8, max 128):")
  );
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt(
        "Password length 
