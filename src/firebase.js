import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBro99sErIDCNuTOv9VGxqJHk7sLTkVRDA",
  authDomain: "chat-app-9408d.firebaseapp.com",
  projectId: "chat-app-9408d",
  storageBucket: "chat-app-9408d.appspot.com",
  messagingSenderId: "306190311816",
  appId: "1:306190311816:web:6063d2de3d58c55afc5a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)