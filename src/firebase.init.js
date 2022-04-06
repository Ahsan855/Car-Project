// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqgUpIBLAwEu9e9Ieg_P5z5go7TvPu8ck",
  authDomain: "one-page-product-review.firebaseapp.com",
  projectId: "one-page-product-review",
  storageBucket: "one-page-product-review.appspot.com",
  messagingSenderId: "639978298629",
  appId: "1:639978298629:web:fbf56824da45481973eb6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;