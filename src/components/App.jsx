import React, {useState} from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea";
// import notes from "../notes"
// function createNote(note) {
//     return <Note 
//     key={note.key}
//     title={note.title}
//     content={note.content}
// />
// }
function App(){
    const [notesArray, setNotesArray] = useState([]);

    function submitNote(e, note){
        setNotesArray(prevArr => [...prevArr, note]);
        e.preventDefault();
    }

    function deleteNote(id){
        setNotesArray(prevArr => {
            return prevArr.filter((obj) => {
                return obj.id !== id;
            })
        })
    }
    return <div>
        <Header />
        <CreateArea submitNote={submitNote}/>
        {notesArray.map((note, index) => (
            <Note 
                key={note.index}
                id={note.index}
                title={note.title}
                content={note.content}
                deleteNote={deleteNote}
            />
        ))}
        <Footer />
    </div>
}

export default App;