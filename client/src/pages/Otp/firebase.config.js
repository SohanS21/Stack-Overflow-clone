import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3gZSygHN7snJqNSQ5VsE1aq7oBxHWqmM",
    authDomain: "stack-overflow-7ffa1.firebaseapp.com",
    projectId: "stack-overflow-7ffa1",
    storageBucket: "stack-overflow-7ffa1.appspot.com",
    messagingSenderId: "576571613767",
    appId: "1:576571613767:web:a93189640b1ce4eb5cc762",
    measurementId: "G-LML01BRMQS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);  