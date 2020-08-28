import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBj2uFv7TsztISIhYcBogY02R1NPdBuVnE",
  authDomain: "whatsapp-clone-reactjs-f18fa.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-reactjs-f18fa.firebaseio.com",
  projectId: "whatsapp-clone-reactjs-f18fa",
  storageBucket: "whatsapp-clone-reactjs-f18fa.appspot.com",
  messagingSenderId: "301488273858",
  appId: "1:301488273858:web:fdded0d427d115a7063e5b",
  measurementId: "G-C4K5HKDBJ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
