import { useGeolocation } from "../contexts/GeolocationContext";
import NoteItem from "../components/NoteItem";

import styles from "./ListView.module.css";

function ListView() {
  const { notes } = useGeolocation();
  return (
    <main className={styles.listView}>
      <section>
        <h1>Notes around your location</h1>
      </section>
      <section>
        <ul>
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      </section>
      <section>TODO: Add new note</section>
    </main>
  );
}

export default ListView;
