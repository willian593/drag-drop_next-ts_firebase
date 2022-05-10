import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA9_vv66Y1aCsQ2y4Z_x6YTmRESQMxQM-Y',
  authDomain: 'next-ts-drag-drop.firebaseapp.com',
  projectId: 'next-ts-drag-drop',
  storageBucket: 'next-ts-drag-drop.appspot.com',
  messagingSenderId: '356660090547',
  appId: '1:356660090547:web:410696dfe715ab916b82c6',
  measurementId: 'G-02DJQZYLS3',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
