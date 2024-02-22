// Function to validate email format
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to validate age input
function validateAge(age) {
  return age >= 1 && age <= 120;
}

// Function to validate zip code format
function validateZipCode(zipCode) {
  // Regular expression to match the format 12345 or 12345-6789
  var zipCodePattern = /^\d{5}(-\d{4})?$/;
  return zipCodePattern.test(zipCode);
}

// Function to validate URL format
function validateURL(url) {
  // Regular expression to match a URL format
  var urlPattern = /^(http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
}

// Function to validate password strength
function validatePasswordStrength(password) {
  // Regular expression to check if the password meets the criteria
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordPattern.test(password);
}

// Function to display error message
function displayError(fieldId, message) {
  var errorElement = document.getElementById(fieldId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Function to remove error message
function removeError(fieldId) {
  var errorElement = document.getElementById(fieldId);
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;

    // Task 1: Verify email format
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      displayError("emailError", "Invalid email format");
      isValid = false;
    } else {
      removeError("emailError");
    }

    // Task 2: Validate age input
    var age = document.getElementById("age").value;
    if (!validateAge(age)) {
      displayError("ageError", "Age must be between 1 and 120");
      isValid = false;
    } else {
      removeError("ageError");
    }

    // Task 3: Ensure password and confirm password match
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      displayError("passwordError", "Passwords do not match");
      isValid = false;
    } else {
      removeError("passwordError");
    }

    // Task 4: Validate zip code format
    var zipCode = document.getElementById("zipCode").value;
    if (!validateZipCode(zipCode)) {
      displayError("zipCodeError", "Invalid zip code format");
      isValid = false;
    } else {
      removeError("zipCodeError");
    }

    // Task 5: Confirm checkbox for terms and conditions is checked
    var termsChecked = document.getElementById("terms").checked;
    if (!termsChecked) {
      displayError("termsError", "Please agree to the terms and conditions");
      isValid = false;
    } else {
      removeError("termsError");
    }

    // Task 6: Validate URL format
    var url = document.getElementById("url").value;
    if (!validateURL(url)) {
      displayError("urlError", "Invalid URL format");
      isValid = false;
    } else {
      removeError("urlError");
    }

    // Task 7: Check if date is set in the future
    var selectedDate = new Date(document.getElementById("date").value);
    var currentDate = new Date();
    if (selectedDate > currentDate) {
      displayError("dateError", "Selected date cannot be in the future");
      isValid = false;
    } else {
      removeError("dateError");
    }

    // Task 8: Restrict uploaded file size (Not implemented in client-side JavaScript)

    // Task 9: Confirm country is selected from dropdown
    var country = document.getElementById("country").value;
    if (country === "") {
      displayError("countryError", "Please select a country");
      isValid = false;
    } else {
      removeError("countryError");
    }

    // Task 10: Implement password strength validation
    if (!validatePasswordStrength(password)) {
      displayError(
        "passwordError",
        "Password must be at least 8 characters long and contain uppercase, lowercase, numeric, and special characters"
      );
      isValid = false;
    } else {
      removeError("passwordError");
    }

    // If form is valid, display success message
    if (isValid) {
      alert("Registered successfully!");
      // Optionally, you can reset the form here:
      // this.reset();
    }
  });
