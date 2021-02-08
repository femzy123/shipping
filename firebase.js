import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCc5Oe7md6Gs8zohXk06vaSDI7oL4hoxac",
    authDomain: "logistics-a418e.firebaseapp.com",
    projectId: "logistics-a418e",
    storageBucket: "logistics-a418e.appspot.com",
    messagingSenderId: "573559405683",
    appId: "1:573559405683:web:83606fb41670de5adffe06",
    measurementId: "G-NCF25FCVR5",
  });
} else {
  firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
