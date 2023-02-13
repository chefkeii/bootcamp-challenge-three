const generateBtn = document.getElementById("generate");
const passwordText = document.getElementById("password");

generateBtn.addEventListener("click", function() {
  const length = parseInt(
    prompt("How long would you like your password to be? (minimum 8, maximum 128)")
  );
  if (length < 8 || length > 128) {
    return alert("Password length must be between 8 and 128 characters.");
  }

  const hasLowercase = confirm("Would you like to include lowercase characters?");
  const hasUppercase = confirm("Would you like to include uppercase characters?");
  const hasNumeric = confirm("Would you like to include numeric characters?");
  const hasSpecial = confirm("Would you like to include special characters?");

  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    return alert("At least one character type must be selected.");
  }

  let password = "";
  const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\`~"
  };

  for (let i = 0; i < length; i++) {
    const type = randomType();
    password += randomChar(characters[type]);
  }

  passwordText.value = password;
});

function randomType() {
  const types = [];
  if (hasLowercase) types.push("lowercase");
  if (hasUppercase) types.push("uppercase");
  if (hasNumeric) types.push("numeric");
  if (hasSpecial) types.push("special");
  return types[Math.floor(Math.random() * types.length)];
}

function randomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}
