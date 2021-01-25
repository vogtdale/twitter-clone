import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd5l9FzjsX-O5b2EA5Ijm15u_c5B2XrjM",
  authDomain: "twitterclone-8b303.firebaseapp.com",
  projectId: "twitterclone-8b303",
  storageBucket: "twitterclone-8b303.appspot.com",
  messagingSenderId: "1038710718960",
  appId: "1:1038710718960:web:b4ef574e06af75d9745d35",
  measurementId: "G-JT545538NY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
