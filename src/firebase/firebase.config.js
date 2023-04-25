// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdF3XMdStGJpX92Ef5GWUKs3rqqYrCJCQ",
  authDomain: "ema-jhon-firebase-auth-bba4b.firebaseapp.com",
  projectId: "ema-jhon-firebase-auth-bba4b",
  storageBucket: "ema-jhon-firebase-auth-bba4b.appspot.com",
  messagingSenderId: "891675641158",
  appId: "1:891675641158:web:40f0a72b65194da2001147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;