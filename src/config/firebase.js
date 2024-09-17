// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhQhiWKUTbCQxk_U4QfTFJn0pgn7sakIw",
  authDomain: "for-writers-23c36.firebaseapp.com",
  projectId: "for-writers-23c36",
  storageBucket: "for-writers-23c36.appspot.com",
  messagingSenderId: "749681568875",
  appId: "1:749681568875:web:b4bcc85bdce5f8666a152e",
  measurementId: "G-KW7ELY74VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);