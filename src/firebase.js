import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAEKCqGBf0X-oEYP8jOE_LBvEEJ9558MGw",
    authDomain: "whats-app-clone-36858.firebaseapp.com",
    projectId: "whats-app-clone-36858",
    storageBucket: "whats-app-clone-36858.appspot.com",
    messagingSenderId: "188053826333",
    appId: "1:188053826333:web:37449c9034c9425dfc4ff4",
    measurementId: "G-Y5H1999XBL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;