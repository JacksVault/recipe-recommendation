// main.js

// Function to render the login page
function renderLoginPage() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = `
      <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4">
          <h1 class="text-center mb-4">Recipe Recommendation</h1>
          <button class="btn btn-primary btn-lg btn-block" onclick="signInWithGoogle()">Sign in with Google</button>
        </div>
      </div>
    `;
  }
  
  // Function to handle Google Sign-In
  async function signInWithGoogle() {
    try {
      // Create a Google Sign-In provider
      const provider = new firebase.auth.GoogleAuthProvider();
  
      // Sign in with Google using the pop-up method
      const result = await firebase.auth().signInWithPopup(provider);
  
      // You can access user information from the result object
      const user = result.user;
      console.log(user);
  
      // Redirect or handle signed-in user here
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
  
  // Render the login page on page load
  document.addEventListener('DOMContentLoaded', renderLoginPage);
  