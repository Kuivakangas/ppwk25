// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdOJIrUlQgAUSJFpYyVRyicGTUORlizhs",
  authDomain: "ppwk25.firebaseapp.com",
  projectId: "ppwk25",
  storageBucket: "ppwk25.firebasestorage.app",
  messagingSenderId: "1067986513496",
  appId: "1:1067986513496:web:1c001a497423b45913e42d",
  measurementId: "G-VZ5DKMQTKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);