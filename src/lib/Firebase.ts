
// Import the functions you need from the SDKs you need
// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZOhMf_StGWVIKwJDgzvY47o5Lsojvftc",
  authDomain: "capsttorres.firebaseapp.com",
  databaseURL: "https://capsttorres-default-rtdb.firebaseio.com",
  projectId: "capsttorres",
  storageBucket: "capsttorres.appspot.com",
  messagingSenderId: "35855198771",
  appId: "1:35855198771:web:b34194db252d0d346d5146",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
