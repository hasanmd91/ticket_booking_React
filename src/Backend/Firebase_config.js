import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApd1JV1VRZWEU5QpYMdXEcwcAW46d_wu8",
  authDomain: "student-data-a47d3.firebaseapp.com",
  projectId: "student-data-a47d3",
  storageBucket: "student-data-a47d3.appspot.com",
  messagingSenderId: "672414288560",
  appId: "1:672414288560:web:7a0da2e1e9e9b74b828975",
  measurementId: "G-7ZE104YQ4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
