// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-jR6OODXjaLQ6vCgsAVBatoyyPhw9y8",
  authDomain: "daktarkhana-test-db.firebaseapp.com",
  projectId: "daktarkhana-test-db",
  storageBucket: "daktarkhana-test-db.appspot.com",
  messagingSenderId: "595413880552",
  appId: "1:595413880552:web:f69ee5487648a3b7ac835d",
  measurementId: "G-2V7MF4G919",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
