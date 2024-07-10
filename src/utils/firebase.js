// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYXMcni2m7sV7e_tJfyQqKL1nx5qZC_8M",
  authDomain: "techshop-9f151.firebaseapp.com",
  projectId: "techshop-9f151",
  storageBucket: "techshop-9f151.appspot.com",
  messagingSenderId: "487383964788",
  appId: "1:487383964788:web:2fb6cf2d5cfcc28a490521",
  measurementId: "G-6QMFFH14D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();