// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf9AYCBh8zgCMCFZrH5lKADx8nQQIyFcg",
  authDomain: "sky-detector.firebaseapp.com",
  projectId: "sky-detector",
  storageBucket: "sky-detector.appspot.com",
  messagingSenderId: "31120292237",
  appId: "1:31120292237:web:2a8a74ec8757c8a347a5c4",
  measurementId: "G-8KXE01F708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "your_apiKey",
//     authDomain: "your_authDomain",
//     projectId: "your_projectId",
//     storageBucket: "your_storageBucket",
//     messagingSenderId: "your_messagingSenderId",
//     appId: "your_appId"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)



 export {analytics, app};
