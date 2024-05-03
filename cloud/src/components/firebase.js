// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxF_PKW0k9e7tqlZaoZ9Xq3Gjw7gi8IRc",
  authDomain: "cloud-act.firebaseapp.com",
  projectId: "cloud-act",
  storageBucket: "cloud-act.appspot.com",
  messagingSenderId: "428079435548",
  appId: "1:428079435548:web:1128256b577413c26b74d9",
  measurementId: "G-VJVRKMXRG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
