// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcm3tKiJsXTWGJn282SqnGoyeFUDuXPL4",
  authDomain: "test-login-web-1.firebaseapp.com",
  projectId: "test-login-web-1",
  storageBucket: "test-login-web-1.appspot.com",
  messagingSenderId: "383622051148",
  appId: "1:383622051148:web:494f094367a1112d2ecbe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };