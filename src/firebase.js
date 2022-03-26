import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "****",
    authDomain: "crud-todo-3db05.firebaseapp.com",
    projectId: "crud-todo-3db05",
    storageBucket: "****",
    messagingSenderId: "****",
    appId: "****",
    measurementId: "G-9BC057SN8H"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

