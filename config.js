import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCfp5Zob7H0SKxZ2u6oge62ZaK9lAqcNMM",
    authDomain: "barter-system-app-c3b4d.firebaseapp.com",
    projectId: "barter-system-app-c3b4d",
    storageBucket: "barter-system-app-c3b4d.appspot.com",
    messagingSenderId: "309724796607",
    appId: "1:309724796607:web:29434941183ea3dcda180a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();