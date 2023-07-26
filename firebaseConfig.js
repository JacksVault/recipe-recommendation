// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSn9XcL0HxSFITzC8PaXGhPz7DkJTTYNs",
  authDomain: "foodrecipe-recommendation.firebaseapp.com",
  projectId: "foodrecipe-recommendation",
  storageBucket: "foodrecipe-recommendation.appspot.com",
  messagingSenderId: "775280490583",
  appId: "1:775280490583:web:da30075eacf8de52ffcb12",
  measurementId: "G-EKFW90HLVW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
