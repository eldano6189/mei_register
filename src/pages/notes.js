import { useState, useRef, useContext } from "react";
import Data from "../context/context";
import styles from "../styles/notes.module.css";

const Notes = () => {
  const { notes, setNotes } = useContext(Data);
  const subjectRef = useRef();
  const noteRef = useRef();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const timestamp = `${day}/${month}/${year}`;

  const [newNote, setNewNote] = useState({
    subject: "",
    note: "",
    date: "",
  });

  const handleSubject = (e) => {
    newNote.subject = e.target.value;
    setNewNote({ ...newNote });
  };

  const handleNote = (e) => {
    newNote.note = e.target.value;
    setNewNote({ ...newNote });
  };

  const handleAddNote = () => {
    newNote.subject = subjectRef.current.value;
    newNote.note = noteRef.current.value;
    newNote.date = timestamp;
    setNotes([...notes, newNote]);
    setNewNote({ ...newNote });
    subjectRef.current.value = "";
    noteRef.current.value = "";
  };

  const handleRemoveNote = (index) => {
    const filterNotes = notes.filter((_, idx) => {
      return idx !== index;
    });
    setNotes(filterNotes);
  };

  return (
    <div className={styles.container__page}>
      <div className={styles.container__panel}>
        <h1>Notes</h1>
        <h2>
          Any notes created here are not shared between users, these are just
          for you!
        </h2>
      </div>
      <ul>
        <li className={styles.tile}>
          <div className={styles.tile__text}>
            <h1>Note</h1>
            <h2>Add your notes here.</h2>
            <div className={styles.container__input}>
              <p>Subject</p>
              <input
                type="text"
                ref={subjectRef}
                onChange={(e) => handleSubject(e)}
              />
            </div>
            <div className={styles.container__input}>
              <p>Note</p>
              <input
                type="text"
                ref={noteRef}
                onChange={(e) => handleNote(e)}
              />
            </div>
          </div>
          <button onClick={() => handleAddNote()}>Add</button>
        </li>
        {notes.length !== 0 &&
          notes.map((note, index) => {
            return (
              <li key={index} className={styles.tile}>
                <div className={styles.tile__text}>
                  <h2>Created</h2>
                  <p>{note.date}</p>
                </div>
                <div className={styles.tile__text}>
                  <h2>Subject</h2>
                  <p>{note.subject}</p>
                </div>
                <div className={styles.tile__text}>
                  <h2>Note</h2>
                  <p>{note.note}</p>
                </div>
                <button onClick={() => handleRemoveNote(index)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notes;
