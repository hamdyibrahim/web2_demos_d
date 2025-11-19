// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

//Change 1: importing getFireStore used to initialize firestore DB
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/*console.log("API Key from env:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log("All env vars:", process.env);*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Initialize Firestore DB
//Change 2: call getFireStore() to initialize firestore DB for the app object
export const db = getFirestore(app);
