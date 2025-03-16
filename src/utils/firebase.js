// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYiPsukI3eLIC77sZ-lB8g3AtCf-sVsgU",
  authDomain: "netflixgpt-1780.firebaseapp.com",
  projectId: "netflixgpt-1780",
  storageBucket: "netflixgpt-1780.firebasestorage.app",
  messagingSenderId: "141712945269",
  appId: "1:141712945269:web:f7c5eb874406c9884a083c",
  measurementId: "G-JGPYNFCJH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);