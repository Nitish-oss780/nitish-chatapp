// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcKQqFd6a2qf0d3QHe-aYA9avFYOxkOLg",
  authDomain: "chat-39539.firebaseapp.com",
  projectId: "chat-39539",
  storageBucket: "chat-39539.appspot.com",
  messagingSenderId: "560700912841",
  appId: "1:560700912841:web:6477dc9d6fd15b99c84918",
  measurementId: "G-LVYWQ79DXQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()




