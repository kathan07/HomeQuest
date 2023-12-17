// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,    
  authDomain: "mern-estate-55878.firebaseapp.com",
  projectId: "mern-estate-55878",
  storageBucket: "mern-estate-55878.appspot.com",
  messagingSenderId: "678054368662",
  appId: "1:678054368662:web:fb9e5e7ef17eb6a03ff9b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);