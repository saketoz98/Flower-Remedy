import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: 'AIzaSyB1_3Jjzs_vDo1T-OvSn0GnX5NC_oMTnIk',
  authDomain: 'flowerremedy-87049.firebaseapp.com',
  databaseURL: 'https://flowerremedy-87049.firebaseio.com',
  projectId: 'flowerremedy-87049',
  storageBucket: 'flowerremedy-87049.appspot.com',
  messagingSenderId: '454861493115',
  appId: '1:454861493115:web:fd5e3779faa2407fb523de',
  measurementId: 'G-WX0WP5RH2G'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
