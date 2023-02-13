function generatePassword() {
  // Prompt the user for password length
  let passwordLength = prompt("Please enter the desired length of your password (8-128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return "Invalid password length. Please enter a number between 8 and 128.";
  }

  // Prompt the user for character types
  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecial = confirm("Include special characters?");

  // Validate character type selection
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    return "You must select at least one character type.";
  }

  // Store possible characters in arrays
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numeric = "0123456789";
  let special = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

  // Determine characters to choose from
  let characters = "";
  if (includeLowercase) characters += lowercase;
  if (includeUppercase) characters += uppercase;
  if (includeNumeric) characters += numeric;
  if (includeSpecial) characters += special;

  // Generate password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  // Return password
  return password;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
