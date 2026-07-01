// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpn6VPgfmqo2xG8pOxViEjNbIkjMEreQU",
  authDomain: "adnexus-b8255.firebaseapp.com",
  projectId: "adnexus-b8255",
  storageBucket: "adnexus-b8255.firebasestorage.app",
  messagingSenderId: "12429352492",
  appId: "1:12429352492:web:e8e3b45d956ab196c17b89",
  measurementId: "G-D5WFCD34W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Firestore Database
const db = getFirestore(app);

console.log("✅ Firebase Connected!");

// Export Firebase services
export { auth, db };