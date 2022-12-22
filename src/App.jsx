import { useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "newnote",
      content: "noenor",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
