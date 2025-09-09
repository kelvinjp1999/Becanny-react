// src/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Config do firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0_7M8t-UKFiAe5sKjS3pHKy-zLB-PDkU",
  authDomain: "becanny-76879.firebaseapp.com",
  projectId: "becanny-76879",
  storageBucket: "becanny-76879.firebasestorage.app",
  messagingSenderId: "620570213117",
  appId: "1:620570213117:web:539abd2fb9f4976d33dc94"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };