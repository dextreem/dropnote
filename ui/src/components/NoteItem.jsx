function NoteItem({ note }) {
  return (
    <div>
      <h3>Author: {note.user.name}</h3>
      <p>{note.text}</p>
    </div>
  );
}

export default NoteItem;
