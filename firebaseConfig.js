// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSn9XcL0HxSFITzC8PaXGhPz7DkJTTYNs",
  authDomain: "foodrecipe-recommendation.firebaseapp.com",
  projectId: "foodrecipe-recommendation",
  storageBucket: "foodrecipe-recommendation.appspot.com",
  messagingSenderId: "775280490583",
  appId: "1:775280490583:web:da30075eacf8de52ffcb12",
  measurementId: "G-EKFW90HLVW"
};
// Your backend code and application logic goes here

// Implement the login form submission event listener:
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful, handle redirection or other logic here
      const user = userCredential.user;
      console.log("Logged in user:", user);
    })
    .catch((error) => {
      // Handle login error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login Error:", errorCode, errorMessage);
    });
});

//Implement the register form submission event listener:
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful, handle redirection or other logic here
      const user = userCredential.user;
      console.log("Registered user:", user);
    })
    .catch((error) => {
      // Handle registration error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration Error:", errorCode, errorMessage);
    });
});

//Implement social media authentication:
const googleSignInBtn = document.querySelector(".btn-google");
const twitterSignInBtn = document.querySelector(".btn-twitter");
const facebookSignInBtn = document.querySelector(".btn-facebook");

const googleAuthProvider = new GoogleAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

googleSignInBtn.addEventListener("click", () => {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // Google login successful, handle redirection or other logic here
      const user = result.user;
      console.log("Google Logged in user:", user);
    })
    .catch((error) => {
      // Handle Google login error
      console.error("Google Login Error:", error);
    });
});

twitterSignInBtn.addEventListener("click", () => {
  signInWithPopup(auth, twitterAuthProvider)
    .then((result) => {
      // Twitter login successful, handle redirection or other logic here
      const user = result.user;
      console.log("Twitter Logged in user:", user);
    })
    .catch((error) => {
      // Handle Twitter login error
      console.error("Twitter Login Error:", error);
    });
});

facebookSignInBtn.addEventListener("click", () => {
  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      // Facebook login successful, handle redirection or other logic here
      const user = result.user;
      console.log("Facebook Logged in user:", user);
    })
    .catch((error) => {
      // Handle Facebook login error
      console.error("Facebook Login Error:", error);
    });
});