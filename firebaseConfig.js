// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);