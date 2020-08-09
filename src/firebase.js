import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcplHMYg8j9fVTSyhnf-kt1LG_mXxyiIg",
  authDomain: "tiktok-clone-by-charlotte.firebaseapp.com",
  databaseURL: "https://tiktok-clone-by-charlotte.firebaseio.com",
  projectId: "tiktok-clone-by-charlotte",
  storageBucket: "tiktok-clone-by-charlotte.appspot.com",
  messagingSenderId: "1063036816959",
  appId: "1:1063036816959:web:bbeaed5f6186d585bb728a",
  measurementId: "G-D83KGJGBVF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

