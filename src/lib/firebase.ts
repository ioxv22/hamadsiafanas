import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8JjBFtND6rPzuzvkVD4VGgUrfjBCeLLs",
  authDomain: "aipoweredtravel-d6f80.firebaseapp.com",
  projectId: "aipoweredtravel-d6f80",
  storageBucket: "aipoweredtravel-d6f80.firebasestorage.app",
  messagingSenderId: "719751127382",
  appId: "1:719751127382:web:6390bb468e5a91e51176f7",
  measurementId: "G-B17FEB0KSS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics conditionally to avoid SSR errors
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, auth, analytics };
