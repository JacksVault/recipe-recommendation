// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";
// Initialize Firebase authentication:
const auth = getAuth(firebaseConfig);
// Implement user authentication functions:
export function signUpWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
//  Add event listeners for the login and register forms:
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to the recipe page on successful login
      window.location.href = "recipe.html";
    })
    .catch((error) => {
      console.log("Error signing in:", error.message);
    });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  signUpWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to the recipe page on successful registration
      window.location.href = "recipe.html";
    })
    .catch((error) => {
      console.log("Error signing up:", error.message);
    });
});
