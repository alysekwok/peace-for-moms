// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAFimjLlCrtgHXRWPCJJYqt-odprAeJY",
  authDomain: "peace-for-moms.firebaseapp.com",
  projectId: "peace-for-moms",
  storageBucket: "peace-for-moms.appspot.com",
  messagingSenderId: "785782458449",
  appId: "1:785782458449:web:4f34cfb30d621d33195070",
  measurementId: "G-RB6VWY3KZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
