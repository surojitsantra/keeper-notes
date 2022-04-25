import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...notes, newNote];
        })
    }

    function deleteNote(id) {
        console.log(id);
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return (id !== index);
            })
        })
    }

    return(<div>
        <Header />
        <CreateArea addNote = {addNote} />
        {notes.map((noteItems, index) => <Note key = {index} id = {index} title = {noteItems.title} content = {noteItems.content} deleteNote = {deleteNote} />)}
        <Footer />
    </div>);
}

export default App;