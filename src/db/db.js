
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBaKu0UUP5dZLXZyLwAjwReLxWr0KMJkkY",
    authDomain: "ecommerce-nike-4b45b.firebaseapp.com",
    projectId: "ecommerce-nike-4b45b",
    storageBucket: "ecommerce-nike-4b45b.firebasestorage.app",
    messagingSenderId: "460794670209",
    appId: "1:460794670209:web:f9dfc5fe477f96cb99b180"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db