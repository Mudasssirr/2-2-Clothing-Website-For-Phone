import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfUv2Kdxec479yUnwaV8NRgjmhE5x1QLw",
  authDomain: "login-firebase-f823b.firebaseapp.com",
  databaseURL: "https://login-firebase-f823b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-firebase-f823b",
  storageBucket: "login-firebase-f823b.appspot.com",
  messagingSenderId: "769682444373",
  appId: "1:769682444373:web:c33abec722c62dc4da84dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, db, getDoc }; 