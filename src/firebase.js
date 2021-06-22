import firebase from 'firebase'
import 'firebase/firestore'

var app = null

const firebaseConfig = {
    apiKey: "AIzaSyAK5mWS-7-StK_FG8tbsXl4LSsCLVMYF2g",
    authDomain: "pi-projekt-6022d.firebaseapp.com",
    projectId: "pi-projekt-6022d",
    storageBucket: "pi-projekt-6022d.appspot.com",
    messagingSenderId: "161346637617",
    appId: "1:161346637617:web:c3e67e5b6e48fda326aa10",
    measurementId: "G-R2L6K543QR"
  };

  firebase.initializeApp(firebaseConfig);
  // provjera je li firebase prazan, ako je inicijalizirati s configom iznad 

  app = firebase.app.length ? firebase.app() : firebase.initializeApp(firebaseConfig)

  export const db = app.firestore()





