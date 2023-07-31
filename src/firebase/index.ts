// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk_8rRFVMA4Uk5IbIpYISbmhdCo4aVfDg",
  authDomain: "chatterapp-94efd.firebaseapp.com",
  projectId: "chatterapp-94efd",
  storageBucket: "chatterapp-94efd.appspot.com",
  messagingSenderId: "206833842928",
  appId: "1:206833842928:web:01151ef0ace7b7498b6035",
  measurementId: "G-PHVH3396D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }

