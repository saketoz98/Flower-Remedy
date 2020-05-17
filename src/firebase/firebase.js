import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
// import 'firebase/messaging';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: 'flowerremedy-87049.appspot.com',
  messagingSenderId: '454861493115',
  appId: process.env.REACT_APP_APP_ID,
  measurementId: 'G-WX0WP5RH2G'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const functions = firebase.functions();

// let messaging;
// if(firebase.messaging.isSupported()) {
//   messaging = firebase.messaging();
// }

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', async () => {
//       const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//           updateViaCache: 'none'
//       });
//       messaging.useServiceWorker(registration);
//   });
// }

export { storage, db, provider, auth, functions, firebase as default };
