// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Ganti dengan konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyBEPnglAGgeJxho9kfdM5d1Bh",
  authDomain: "nexstore-f286a.firebaseapp.com",
  projectId: "nexstore-f286a",
  storageBucket: "nexstore-f286a.appspot.com",
  messagingSenderId: "604566007255",
  appId: "1:604566007255:web:878da0f8b29e",
  measurementId: "G-SF885JXHLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
    auth, 
    googleProvider, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
};
