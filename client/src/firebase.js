import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bright-exam.firebaseapp.com",
  projectId: "bright-exam",
  storageBucket: "bright-exam.appspot.com",
  messagingSenderId: "911335296647",
  appId: "1:911335296647:web:a42435b75b20c9ab2df222"
};

export const app = initializeApp(firebaseConfig);