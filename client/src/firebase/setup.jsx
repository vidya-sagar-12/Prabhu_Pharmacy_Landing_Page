// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2okP0Yc1ljqJ69y2sRUmfX9Ynzc-nHDs",
  authDomain: "prabhu-pharmacy.firebaseapp.com",
  projectId: "prabhu-pharmacy",
  storageBucket: "prabhu-pharmacy.firebasestorage.app",
  messagingSenderId: "78127114735",
  appId: "1:78127114735:web:809436cfe8ecf8b655ae1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)