import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVbsJ7ugLKNZ44wHtBgIib_I0NJgMj3uk",
  authDomain: "twitter-clone-6c08b.firebaseapp.com",
  databaseURL: "https://twitter-clone-6c08b.firebaseio.com",
  projectId: "twitter-clone-6c08b",
  storageBucket: "twitter-clone-6c08b.appspot.com",
  messagingSenderId: "243676741905",
  appId: "1:243676741905:web:2871a399418c817f9d8cb0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

//conectar firebase com o backend
