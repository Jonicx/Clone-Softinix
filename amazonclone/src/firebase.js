import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDzBYcMqO52E2CGtKyxFnnwrTx3QkG_WBM",
  authDomain: "clone-challenge-dcf54.firebaseapp.com",
  projectId: "clone-challenge-dcf54",
  storageBucket: "clone-challenge-dcf54.appspot.com",
  messagingSenderId: "550896177282",
  appId: "1:550896177282:web:e9084b3b90fdb30157649b",
  measurementId: "G-PEKYHJ3G13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);//initializing the app

const db = firebaseApp.firestore();//initializing the database (firestore is the real time database in firebase)
const auth = firebase.auth();

export {db, auth};//Inorder to use the db and auth outside this file firebase.js