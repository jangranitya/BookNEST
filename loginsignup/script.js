// HTML elements
const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginHeader = document.querySelector(".login header");
const signupForm = document.querySelector(".signup form");
const loginForm = document.querySelector(".login form");

// Toggle between signup and login forms
loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Email validation function
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Password validation function
function isStrongPassword(password) {
  // At least 8 characters, including uppercase, lowercase, number, and special character
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return passwordPattern.test(password);
}

// Signup form submission handler
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const fullName = signupForm.elements[0].value;
  const email = signupForm.elements[1].value;
  const password = signupForm.elements[2].value;
  const isAcceptedTerms = signupForm.elements[3].checked;

  // Validate email
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password
  if (!isStrongPassword(password)) {
    alert("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
    return;
  }

  // Validate terms acceptance
  if (!isAcceptedTerms) {
    alert("You must accept the terms and conditions.");
    return;
  }

  // Perform signup logic here (e.g., sending data to server)
  alert("Signup successful!");
});

// Login form submission handler
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  const email = loginForm.elements[0].value;
  const password = loginForm.elements[1].value;

  // Validate email
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password (here we just check if password is not empty)
  if (!password) {
    alert("Please enter your password.");
    return;
  }

  // Perform login logic here (e.g., sending data to server)
  alert("Login successful!");
});
