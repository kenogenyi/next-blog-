// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "kensnews-d09a6.firebaseapp.com",
  projectId: "kensnews-d09a6",
  storageBucket: "kensnews-d09a6.firebasestorage.app",
  messagingSenderId: "771638306926",
  appId: "1:771638306926:web:b29cb5452b2fba53ad5e7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);