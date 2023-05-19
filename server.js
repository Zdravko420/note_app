const express =  require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "note_app-main/public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"))
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();

    let imagename = date.getDate() + date.getTime() + file.name;

    let path = 'public/uploads/' + imagename;

    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            res.json(`uploads/${imagename}`)
        }
    })
})
app.get("/admin", (req, res) => {
    res.sendFile(path.join(initial_path, "dashboard.html"));
})
app.get("/note", (req, res) => {
    res.sendFile(path.join(initial_path, "note.html"));
})
app.use((req, res) => {
    res.json("404");
})
app.listen("3000", () => {
    console.log('listening......');
    
})