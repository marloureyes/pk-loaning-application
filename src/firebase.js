import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCY3jTtvdHH9yEg2jYQI_VBLUjHwYZzceE",
    authDomain: "pk-loan-app.firebaseapp.com",
    databaseURL: "https://pk-loan-app.firebaseio.com",
    projectId: "pk-loan-app",
    storageBucket: "pk-loan-app.appspot.com",
    messagingSenderId: "860099458950",
    appId: "1:860099458950:web:4e80d3ca6475f24e6d9e07",
    measurementId: "G-ZRH2REPF9N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;