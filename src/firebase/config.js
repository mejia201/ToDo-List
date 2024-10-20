// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtd5LyTbPWpzEbh9pp2p26xTKqcARruuQ",
  authDomain: "todo-list-f0fe2.firebaseapp.com",
  projectId: "todo-list-f0fe2", 
  storageBucket: "todo-list-f0fe2.appspot.com",
  messagingSenderId: "754747056048",
  appId: "1:754747056048:web:39b371eb6153adc32c8075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);