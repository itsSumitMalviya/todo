// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGD3YNArcYxWtTe6MjW6HNhdLyIYQItU",
  authDomain: "todo-app-l.firebaseapp.com",
  projectId: "todo-app-l",
  storageBucket: "todo-app-l.appspot.com",
  messagingSenderId: "521775345595",
  appId: "1:521775345595:web:be1d38464a4076d28c9e9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)