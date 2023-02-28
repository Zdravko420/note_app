//import firebase from "./../../node_modules/firebase/compat/app"
//import "/../../node_modules/firebase/compat/auth"
//import "/../../node_modules/firebase/compat/firestore"
// other services is needed


//import { initializeApp } from "./../../node_modules/firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, collection, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4Xweb_K9vWF6oxIO8NeUyVVQKCXZogIw",
    authDomain: "note-app-73368.firebaseapp.com",
    projectId: "note-app-73368",
    storageBucket: "note-app-73368.appspot.com",
    messagingSenderId: "358165143119",
    appId: "1:358165143119:web:17240b42628ed2ccd0d43a"
};

// Initialize Firebase
// constfirebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const article = doc(firestore, 'articles/1');
const singleDoc = await getDoc(article);

console.log(singleDoc.data());
const inputList = [...document.querySelectorAll('input')];
inputList.map(e => e.value);

await setDoc;
//const db = getFirestore(app);
export {
  firestore,
}
//let db = app.firestore();

// const firestoragee = firebase.firestore();
const settings = {
  timetampsInSnapshots: true,
};

  //firebase.settings(settings);

  //export default firebase;
//export{
//  firestoragee,
//};

//let auth = firestore.auth();