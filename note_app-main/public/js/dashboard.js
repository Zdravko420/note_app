// let ui = new firebaseui.auth.AuthUI(firebase.auth());
import {getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
// let login = document.querySelector('.login');
const provider = new GoogleAuthProvider();
const auth = getAuth();

document.getElementsByTagName('button')[0].onclick = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
      // ...
    });
}
// const setupLoginButton = () =>{
//     ui.start("#loginUI", {
//         callback: {
//             signInSuccessWithAuthResult: function(authResult, redirectURL){
//                 console.log(authResult);
//                 return false;
//             }
//         },
//         signInFlow: "popup",
//         signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
//     })
// }

//setupLoginButton();