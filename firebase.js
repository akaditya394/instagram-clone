// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEuJ9_H_OIcLXcaFAuK0HTNT2QdpGvKs",
  authDomain: "insta-clone-aa847.firebaseapp.com",
  projectId: "insta-clone-aa847",
  storageBucket: "insta-clone-aa847.appspot.com",
  messagingSenderId: "34855797055",
  appId: "1:34855797055:web:4f136ba75ce55e62a9538a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app, db, storage};