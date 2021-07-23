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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;