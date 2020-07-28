import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKltqfhJ2B6UJFx7qq11g39122QN_KoEc",
  authDomain: "e-commerce-app-da83b.firebaseapp.com",
  databaseURL: "https://e-commerce-app-da83b.firebaseio.com",
  projectId: "e-commerce-app-da83b",
  storageBucket: "e-commerce-app-da83b.appspot.com",
  messagingSenderId: "779204615598",
  appId: "1:779204615598:web:9e4ec69abd2cdabd913c3f",
  measurementId: "G-9NH6M6R0D9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthprovider = new firebase.auth.GoogleAuthProvider();
googleAuthprovider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthprovider);

export default firebase;
