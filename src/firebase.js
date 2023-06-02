// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZlQwfZbLNrWxMYZikRtTnZ7ZN7hflqM",
  authDomain: "prathmeshsadake-nextflix.firebaseapp.com",
  projectId: "prathmeshsadake-nextflix",
  storageBucket: "prathmeshsadake-nextflix.appspot.com",
  messagingSenderId: "766178000220",
  appId: "1:766178000220:web:4647bf0706ccf776b39599",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
