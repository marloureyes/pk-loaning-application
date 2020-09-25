import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// 12
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_API_KEY : process.env.FIREBASE_API_KEY,
    authDomain: "pk-loan-app.firebaseapp.com",
    databaseURL: "https://pk-loan-app.firebaseio.com",
    projectId: "pk-loan-app",
    storageBucket: "pk-loan-app.appspot.com",
    messagingSenderId: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID : process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_APP_ID : process.env.FIREBASE_APP_ID,
    measurementId: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_FIREBASE_MEASUREMENT_ID: process.envFIREBASE_APP_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  export default firebase;
