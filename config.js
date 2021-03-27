import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBlXfzfIwyZXA8mudP-wj16sgsE-e8m6nc",
  authDomain: "the-everything-hub.firebaseapp.com",
  projectId: "the-everything-hub",
  storageBucket: "the-everything-hub.appspot.com",
  messagingSenderId: "212819012490",
  appId: "1:212819012490:web:6978c6656e904af86db673",
  measurementId: "G-NCM40MB52J"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  }
export default firebase.firestore()