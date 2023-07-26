// Initialize Firebase with your Firebase configuration
// Replace the config object with your actual Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get references to the login and sign-up forms
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  // Get references to the switch links
  const switchToSignupLink = document.getElementById('switchToSignup');
  const switchToLoginLink = document.getElementById('switchToLogin');
  
  // Switch to the sign-up form when "Sign up" link is clicked
  switchToSignupLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });
  
  // Switch to the login form when "Login" link is clicked
  switchToLoginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  });
  
  // Handle login form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User login successful, do something (e.g., redirect to recipe page)
        console.log('Login successful');
        // Replace this with the redirection logic if needed
      })
      .catch((error) => {
        console.error('Login error:', error.message);
      });
  });
  
  // Handle sign-up form submission
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User sign-up successful, do something (e.g., redirect to recipe page)
        console.log('Sign-up successful');
        // Replace this with the redirection logic if needed
      })
      .catch((error) => {
        console.error('Sign-up error:', error.message);
      });
  });
  