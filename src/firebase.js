import firebase from 'firebase/app';
import 'firebase/firestore';
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID)
console.log(process.env.REACT_APP_FIREBASE_APP_ID)
console.log(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_API_KEY : process.FIREBASE_API_KEY,
    authDomain: "pk-loan-app.firebaseapp.com",
    databaseURL: "https://pk-loan-app.firebaseio.com",
    projectId: "pk-loan-app",
    storageBucket: "pk-loan-app.appspot.com",
    messagingSenderId: process.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID : process.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_APP_ID : process.FIREBASE_APP_ID,
    measurementId: process.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_MEASUREMENT_ID: process.FIREBASE_APP_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;