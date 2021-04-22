import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyARm9PnckwNdQ7os3pxi3tlL9vNJsYf7ME",
    authDomain: "pigeon-project-f6a4a.firebaseapp.com",
    projectId: "pigeon-project-f6a4a",
    storageBucket: "pigeon-project-f6a4a.appspot.com",
    messagingSenderId: "295248187832",
    appId: "1:295248187832:web:9e25ae85c471b2e5fb7f4d"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth, provider, db};