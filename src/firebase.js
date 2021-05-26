import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKpc3lML9gOdsmuKBlDYHyhxJCUzw8UbA",
  authDomain: "trill-9066b.firebaseapp.com",
  projectId: "trill-9066b",
  storageBucket: "trill-9066b.appspot.com",
  messagingSenderId: "771435745490",
  appId: "1:771435745490:web:e141408f96a16b80f9dd0b",
  measurementId: "G-7V21GBV1XW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
