import styled from "styled-components";

import NoteCardItem from "./NoteCardItem";
import { useNotes } from "./useNotes";
import Spinner from "../../components/Spinner";
import AddNote from "./AddNote";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin: 0 auto;

  align-items: center;
`;

const StyledNotesListView = styled.div`
  padding: 4.4rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  max-height: 78vh;
  overflow-y: auto;
`;

function NotesListView() {
  const { notes, isLoading } = useNotes();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <AddNote />
      <StyledNotesListView>
        {notes.map((n) => (
          <NoteCardItem key={n.id} item={n} />
        ))}
      </StyledNotesListView>
    </Container>
  );
}

export default NotesListView;
