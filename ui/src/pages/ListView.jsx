import { useGeolocation } from "../contexts/GeolocationContext";
import NoteItem from "../components/NoteItem";
import Button from "../components/Button";

import styles from "./ListView.module.css";

function ListView() {
  const { notes, isLoading } = useGeolocation();
  return (
    <main className={styles.listView}>
      <section>
        <h1>Notes at your location</h1>
      </section>
      <section>
        {isLoading && <p>Loading</p>}
        {!isLoading && notes && notes.length === 0 && (
          <p>No notes in your surrounding!</p>
        )}
        {!isLoading && notes && notes.length > 0 && (
          <ul>
            {notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                className={styles.listViewItem}
              />
            ))}
          </ul>
        )}
      </section>
      <section>
        <Button type="primary">
          <span>New Note</span>
        </Button>
      </section>
    </main>
  );
}

export default ListView;
