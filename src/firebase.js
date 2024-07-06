// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIexkyuZSuX_bcpPOrHb0ZRyBFFRAWE4o",
  authDomain: "anothertodo-a1a28.firebaseapp.com",
  projectId: "anothertodo-a1a28",
  storageBucket: "anothertodo-a1a28.appspot.com",
  messagingSenderId: "264955610702",
  appId: "1:264955610702:web:9d234525dfa0b69e54251f",
  measurementId: "G-T751807T33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth()