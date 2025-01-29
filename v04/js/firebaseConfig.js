// Firebase Imports (ES6-Module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Deine Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyADch6nVtF-ljkPWvsae-rHEaiuKJSswY0",
  authDomain: "schichtplan-5c70f.firebaseapp.com",
  projectId: "schichtplan-5c70f",
  storageBucket: "schichtplan-5c70f.firebasestorage.app",
  messagingSenderId: "502149312331",
  appId: "1:502149312331:web:1dbce2d7fa034f25d702ce",
  measurementId: "G-0DL0R5B7LV"
};

// Initialisierung
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Hilfsfunktionen

export function registerUser(username, email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Benutzer in Firestore speichern
      return addDoc(collection(db, 'users'), {
        uid: userCredential.user.uid,
        username,
        email,
        roles: []
      });
    });
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function observeAuthState(callback) {
  onAuthStateChanged(auth, user => {
    callback(user);
  });
}
