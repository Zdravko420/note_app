import {firestore} from "./firebase.js";
//import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import {setDoc, doc, getDoc, addDoc, collection} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
//import { } from 'https://www.gstatic.com/firebasejs/ui/9.8.1/firebase-ui-auth.js';

const noteTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');


bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () =>{
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => { 
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){ 
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload',{
            method: 'post', 
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){ 
                addImage(data, file.name);
            }else{ 
                bannerPath = `${location.origin}/${data}`;
            banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    }else{ 
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articleField.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleField.value = articleField.value.slice(0, curPos) + textToInsert + articleField.value.slice(curPos);
}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', async () => {
    if(articleField.value.length && noteTitleField.value.length){
        //generirane na id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let noteTitle = noteTitleField.value.split(" ").join("-");
        let id = '';
        for(let i = 0; i <4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        //suzdawane imena za doc
        let docName = `${noteTitle}-${id}`;
        let date = new Date();

        //dostup do firestore s db promenliwa
        //let notesData = doc(firestore, `notes`);
        await addDoc(collection(firestore, 'notes'),{
            title: noteTitleField.value,
            article: articleField.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() =>{
            location.href = `/note.html`;
        })

    }
})
