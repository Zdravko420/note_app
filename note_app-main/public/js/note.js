import {firestore} from "./firebase.js";
import {setDoc, doc, getDocs, collection} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

const note = document.getElementById('note');

const querySnapshot = await getDocs(collection(firestore, `notes`));
querySnapshot.forEach((docs) =>{
    console.log(docs.data())
    let article = docs.data();
    note.innerHTML += 
    `<div class="note">
        <h1>${article.title}</h1>
        <img src="${article.bannerImage}" class="base-img"/>
        ${article.article}
    </div>`;
})
    