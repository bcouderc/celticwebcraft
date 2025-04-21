// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl3DqiJhVfX2zREQWNuw3fNsQvWlhL9Qo",
  authDomain: "celticwebcraft.firebaseapp.com",
  projectId: "celticwebcraft",
  storageBucket: "celticwebcraft.firebasestorage.app",
  messagingSenderId: "809129974133",
  appId: "1:809129974133:web:b104cfd7e47e2247b7db3c",
  measurementId: "G-BS28M0DKL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);