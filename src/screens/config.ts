// src/firebase/config.js
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Your Firebase config object
const firebaseConfig = {
  apiKey: 'dfjdnhfkl',
  authDomain: 'YOUR_AsdfsdfUTH_DOMAIN',
  projectId: 'sdfdf',
  storageBucket: 'sdf',
  messagingSenderId: 'dsfds',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase only if it hasn't been initialized yet
if (!initializeApp?.length) {
  initializeApp(firebaseConfig);
}

export { auth, firestore };
