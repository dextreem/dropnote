import styles from "./NoteItem.module.css";

function NoteItem({ note }) {
  console.log(note);
  return (
    <div className={styles.noteItem}>
      <h2>
        <span>👤 {note.user.name}</span>{" "}
      </h2>
      <span>
        📅 {note.creation.day}(⏱️ {note.creation.time})
      </span>
      <p className={styles.noteText}>{note.text}</p>
    </div>
  );
}

export default NoteItem;
