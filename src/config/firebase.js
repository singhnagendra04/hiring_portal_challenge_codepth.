// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCFhajk1j4XM1s87ASSX-LrbaGKhfo6xRw",
  authDomain: "fir-authentication-2d483.firebaseapp.com",
  projectId: "fir-authentication-2d483",
  storageBucket: "fir-authentication-2d483.appspot.com",
  messagingSenderId: "697224195403",
  appId: "1:697224195403:web:96d3350353708d5d804cce",
  measurementId: "G-SWR8NYYBLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
