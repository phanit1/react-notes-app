import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newTitle.trim() !== "" && newNote.trim() !== "") {
      setNotes([...notes, { title: newTitle, note: newNote }]);
      setNewTitle("");
      setNewNote("");
    }
  };

  return (
    <div style={{backgroundColor:"cyan"}}>
      <div align="center">
      <h1>REACT NOTES APP</h1>
      <br />
      <input
        type="text"
        placeholder="Enter a title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <br/><br/>
      <textarea
        placeholder="Enter a note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <br />
      <button onClick={addNote}>Add Note</button>
      <br/><br/>
      </div>
      <div className="card-container">
        {notes.map((note, index) => (
          <div key={index}>
            <Card bg = "secondary" border="primary" style={{ width: "18rem", color:"white" }} >
              <Card.Header style={{fontStyle:"bold"}}>{note.title}</Card.Header>
              <Card.Body>
                <Card.Text>{note.note}</Card.Text>
              </Card.Body>
            </Card>
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
