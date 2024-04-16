
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnxaPV36M4dDb5NZesSq-m-A3TPvrYvyA",
    authDomain: "react-journal-dfcc6.firebaseapp.com",
    projectId: "react-journal-dfcc6",
    storageBucket: "react-journal-dfcc6.appspot.com",
    messagingSenderId: "503273023882",
    appId: "1:503273023882:web:fe5228b50f29196ea50073"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Funcionalidades de auth
export const FirebaseAuth = getAuth(FirebaseApp);

// Funcionalidades de Base de Datos
export const FirebaseDB = getFirestore(FirebaseApp);
