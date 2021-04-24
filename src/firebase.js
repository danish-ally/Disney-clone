import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQd9HVOByNMMHqCXj08TbLze4VGNr2G6U",
    authDomain: "disney-clone-32ee2.firebaseapp.com",
    projectId: "disney-clone-32ee2",
    storageBucket: "disney-clone-32ee2.appspot.com",
    messagingSenderId: "22026634138",
    appId: "1:22026634138:web:ce94205b64d432361a7023",
    measurementId: "G-FJJP17NPY8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;