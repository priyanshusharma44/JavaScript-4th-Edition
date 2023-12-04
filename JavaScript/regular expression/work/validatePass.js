//write a regular expression to validate a password with specific requirements (e.g. at least 8 characters, containing uppercase and lowercase letters, and at least one number)

const password = "Mr.sagun1";
const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (pattern.test(password)) {
    console.log("Password is valid.");
  } else {
    console.log("Password is invalid.");
  }
console.log(password);
  