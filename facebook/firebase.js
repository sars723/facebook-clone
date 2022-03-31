import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJxpyPkFLBSvUyWsPH3A2cDnTTT1l5aqw",
  authDomain: "facebook-61e9b.firebaseapp.com",
  projectId: "facebook-61e9b",
  storageBucket: "facebook-61e9b.appspot.com",
  messagingSenderId: "715126625764",
  appId: "1:715126625764:web:d3ca2e8f1ee199e38e23f1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
