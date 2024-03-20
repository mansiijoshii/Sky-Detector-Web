 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXeAjCWsw6HVlCwK9aa6b2Udj_M8cKjmM",
  authDomain: "sky-detect.firebaseapp.com",
  projectId: "sky-detect",
  storageBucket: "sky-detect.appspot.com",
  messagingSenderId: "178680334588",
  appId: "1:178680334588:web:d5f0041f532deb9d5d2f79",
  measurementId: "G-0F2H7NMRYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth(app);

export {app, auth};