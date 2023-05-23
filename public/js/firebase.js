let firebaseConfig = {
    apiKey: "AIzaSyC4Xweb_K9vWF6oxIO8NeUyVVQKCXZogIw",
  authDomain: "note-app-73368.firebaseapp.com",
  projectId: "note-app-73368",
  storageBucket: "note-app-73368.appspot.com",
  messagingSenderId: "358165143119",
  appId: "1:358165143119:web:17240b42628ed2ccd0d43a"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();