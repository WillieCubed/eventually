import firebase from 'firebase';

let firebaseInitialized = false;

const firebaseConfig = {
  apiKey: 'AIzaSyCdPGhsho4yax5ev3nE939Xp45gTpLSMLE',
  authDomain: 'eventually-dev.firebaseapp.com',
  databaseURL: 'https://eventually-dev.firebaseio.com',
  projectId: 'eventually-dev',
  storageBucket: 'eventually-dev.appspot.com',
  messagingSenderId: '1012667528749',
  appId: '1:1012667528749:web:a6db81f286ad06133c6aa4',
};

export default function initializeFirebase() {
  if (!firebaseInitialized) {
    firebase.initializeApp(firebaseConfig);
    firebaseInitialized = true;
  }
}
