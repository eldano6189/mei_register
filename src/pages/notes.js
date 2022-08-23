//External imports
import { useState, useRef, useEffect } from "react";

//Style imports
import styles from "../styles/notes.module.css";

//Component imports
import Tick from "../components/svg/tick";

const Notes = () => {
  //Component references
  const subjectRef = useRef();
  const noteRef = useRef();

  //Component states
  const [priority, setPriority] = useState(false);
  const [notes, setNotes] = useState(() => {
    const getNotes = localStorage.getItem("Notes");
    const parseNotes = JSON.parse(getNotes);
    return parseNotes || [];
  });
  const [newNote, setNewNote] = useState({
    subject: "",
    note: "",
    date: "",
    priority: false,
  });

  //Component variables
  //Creates timestamp for note
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const timestamp = `${day}/${month}/${year}`;

  //Component useEffects
  //Sets note data to localStorage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  //Component functions
  const handleSubject = (e) => {
    newNote.subject = e.target.value;
    setNewNote({ ...newNote });
  };

  const handleNote = (e) => {
    newNote.note = e.target.value;
    setNewNote({ ...newNote });
  };

  const handleRememberPriority = () => {
    setPriority(!priority);
  };

  const handleAddNote = () => {
    newNote.subject = subjectRef.current.value;
    newNote.note = noteRef.current.value;
    newNote.date = timestamp;
    newNote.priority = priority;
    setNotes([...notes, newNote]);
    setNewNote({ ...newNote });
    setPriority(false);
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
        <p>
          Clicking <q>Priority</q> will place it to the beginning of your list.
        </p>
      </div>
      <ul>
        <li className={styles.tile}>
          <div className={styles.tile__head}>
            <h1>Note</h1>
            <h2>Add your notes here.</h2>
          </div>
          <div className={styles.tile__body}>
            <p>Subject</p>
            <input
              type="text"
              ref={subjectRef}
              onChange={(e) => handleSubject(e)}
            />
            <p>Note</p>
            <input type="text" ref={noteRef} onChange={(e) => handleNote(e)} />
          </div>
          <div className={styles.tile__foot}>
            <div className={styles.foot__priority}>
              <div
                className={styles.container__priority_checkbox}
                onClick={handleRememberPriority}
              >
                {priority && <Tick />}
              </div>
              <p>Priority?</p>
            </div>
            <div className={styles.foot__button}>
              <button onClick={() => handleAddNote()}>Add</button>
            </div>
          </div>
        </li>
        {notes.length !== 0 &&
          notes
            .sort((a, b) => Number(b.priority) - Number(a.priority))
            .map((note, index) => {
              return (
                <li key={index} className={styles.tile}>
                  <div className={styles.tile__head}>
                    <h2>
                      Created{" "}
                      {note.priority && (
                        <span className={styles.priority}>- Priority</span>
                      )}
                    </h2>
                    <p>{note.date}</p>
                    <h2>Subject</h2>
                    <p>{note.subject}</p>
                  </div>
                  <div className={styles.tile__body}>
                    <h2>Note</h2>
                    <p>{note.note}</p>
                  </div>
                  <div className={styles.tile__foot}>
                    <div className={styles.foot__button}>
                      <button onClick={() => handleRemoveNote(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Notes;
