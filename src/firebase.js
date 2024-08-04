import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8zVjpFUkUPxqf4P8PkgNQUb26b8znXrY",
  authDomain: "linkedin-clone-a4a37.firebaseapp.com",
  projectId: "linkedin-clone-a4a37",
  storageBucket: "linkedin-clone-a4a37.appspot.com",
  messagingSenderId: "537073348096",
  appId: "1:537073348096:web:5a656b8bf5cfff9aae72e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { db, auth };

