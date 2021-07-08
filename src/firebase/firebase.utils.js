import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZYmtASlq-kaS3jdt-nFi27kwTmUqVPI0",
    authDomain: "crwn-db-95198.firebaseapp.com",
    projectId: "crwn-db-95198",
    storageBucket: "crwn-db-95198.appspot.com",
    messagingSenderId: "1004708011095",
    appId: "1:1004708011095:web:aa766124a51ac697059712",
    measurementId: "G-C87P5R8GPX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;