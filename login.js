// login.js
import { signIn, signUp } from "./auth.js";

// Get references to the login/sign-up form elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  // Call the appropriate authentication function based on the form action
  // For example, check if the form action is "signup" and call signUp(email, password)
  // Otherwise, call signIn(email, password)
});
