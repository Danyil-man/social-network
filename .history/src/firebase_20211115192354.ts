import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDsqj0TDGyKMQJTM7Dr6d7JMRWMQurTrIs",
  authDomain: "linkstagram-d5498.firebaseapp.com",
  databaseURL: "https://linkstagram-d5498-default-rtdb.firebaseio.com",
  projectId: "linkstagram-d5498",
  storageBucket: "linkstagram-d5498.appspot.com",
  messagingSenderId: "77883754660",
  appId: "1:77883754660:web:8baf211f72a7fda8c47e31"
};

/*
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,*/



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export {app, db, storage, auth}; 