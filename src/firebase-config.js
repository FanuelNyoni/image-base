import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCxjYHkOgwbei6aFVlleg6vI3Vdzu5o4to",
    authDomain: "my-gallery-54ff3.firebaseapp.com",
    projectId: "my-gallery-54ff3",
    storageBucket: "my-gallery-54ff3.appspot.com",
    messagingSenderId: "1084311375722",
    appId: "1:1084311375722:web:1f00c05fa0dd9b58a29f13",
    measurementId: "G-F8KE5KM497"
  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig); 

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {appStorage, appFirestore, timestamp};