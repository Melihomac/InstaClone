// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD48DuF2ctp7TvZPKBxhRglcOs1zmSJWMM',
  authDomain: 'kompa-a2da3.firebaseapp.com',
  projectId: 'kompa-a2da3',
  storageBucket: 'kompa-a2da3.appspot.com',
  messagingSenderId: '604606471930',
  appId: '1:604606471930:web:5acb62983b275a7fbf3343',
  measurementId: 'G-2PQPLW8H73',
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const db = getDatabase(FIREBASE_APP);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export {FIREBASE_AUTH};
const analytics = getAnalytics(FIREBASE_APP);
