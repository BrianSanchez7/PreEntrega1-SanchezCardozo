import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-ry0i-WQffqWXhvz2hyvLsnUrwFrYlk",
  authDomain: "mapatech-3635f.firebaseapp.com",
  projectId: "mapatech-3635f",
  storageBucket: "mapatech-3635f.firebasestorage.app",
  messagingSenderId: "947927333258",
  appId: "1:947927333258:web:065dc4536c5a7a4ecf7073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;