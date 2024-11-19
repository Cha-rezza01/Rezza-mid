import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyANlW71LFMnXEr4gSWbgfqxrxAUvYcNyA0",
  authDomain: "cv-rezza.firebaseapp.com",
  projectId: "cv-rezza",
  storageBucket: "cv-rezza.firebasestorage.app",
  messagingSenderId: "132462907909",
  appId: "1:132462907909:web:ba919806a7bd3fb79d026c",
  measurementId: "G-GZK82T1LT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Ensure Analytics is only initialized in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics };
