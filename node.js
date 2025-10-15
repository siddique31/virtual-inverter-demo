import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDr5UnIzSwjYWwYmh53CqfwQof9RBVMDmM",
  authDomain: "flowchat-d68a3.firebaseapp.com",
  projectId: "flowchat-d68a3",
  storageBucket: "flowchat-d68a3.firebasestorage.app",
  messagingSenderId: "634520121209",
  appId: "1:634520121209:web:bf9efab2a4b20661f1c9a8",
  measurementId: "G-XXKC5LRELS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
