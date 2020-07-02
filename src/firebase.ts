import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

/**
 * A flag to indicate if Firebase has been initialized with project config.
 */
let firebaseInitialized = false;

/**
 * Return the default Firebase app.
 * 
 * This initializes Firebase if it hasn't been initialized yet.
 */
// export function getFirebaseApp() {
//   if (firebaseInitialized) {
//     return firebase.app();
//   }
//   return firebase.initializeApp(firebaseConfig);
// }

/**
 * Must be called exactly once at the beginning of the app lifecycle.
 */
export function initializeFirebase() {
  firebase.initializeApp(firebaseConfig);
}
