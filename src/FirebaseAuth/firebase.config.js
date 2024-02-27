// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9boBWQUxK7mWhgKJG9ZxiF_JsnhqK9c",
  authDomain: "fequizapp.firebaseapp.com",
  projectId: "fequizapp",
  storageBucket: "fequizapp.appspot.com",
  messagingSenderId: "803854036444",
  appId: "1:803854036444:web:a5685313e761f9e557b319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);