const noteSection = document.querySelector('.notes-section');

db.collection("notes").get().then((notes) => {
    notes.forEach(note => {
        if(note.id != decodeURI(location.pathname.split("/").pop())){
            createnote(note);
        }
    })
})

const createnote = (note) => {
    let data = note.data();
    if(data.bannerImage){
        noteSection.innerHTML += `
        <div class="note-card">
            <img src="${data.bannerImage}" class="note-image" alt="">
            <h1 class="note-title">${data.title.substring(0, 100) + '...'}</h1>
            <p class="note-overview">${data.article.substring(0, 200) + '...'}</p>
            <a href="/${note.id}" class="btn dark">read</a>
            <a href="#" onclick="deleteBlog('${note.id}')" class="btn dark">delete</a>
        </div>
        `;
    }
    else{
        noteSection.innerHTML += `
        <div class="note-card">
            <h1 class="note-title">${data.title.substring(0, 100) + '...'}</h1>
            <p class="note-overview">${data.article.substring(0, 200) + '...'}</p>
            <a href="/${note.id}" class="btn dark">read</a>
            <a href="#" onclick="deleteBlog('${note.id}')" class="btn dark">delete</a>
            
        </div>
        `;
    }
    
}

const deleteBlog = (id) => {

db.collection("notes").doc (id).delete().then(() => { location.reload();})
.catch((error) =>{
    console.log("Error deleteing the note");
})

}