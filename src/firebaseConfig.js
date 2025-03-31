// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuumvCBNR494qBDPXC8Zx-z2YG6vJx3xU",
  authDomain: "cightbrand.firebaseapp.com",
  projectId: "cightbrand",
  storageBucket: "cightbrand.firebasestorage.app",
  messagingSenderId: "570770003555",
  appId: "1:570770003555:web:1bc4daa5ba7dbe9afd4a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };