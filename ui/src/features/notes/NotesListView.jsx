import styled from "styled-components";

import NoteCardItem from "./NoteCardItem";
import Spinner from "../../components/Spinner";
import AddNote from "./AddNote";

import { useNotes } from "./useNotes";
import { useUser } from "../users/useUser";
import LinkButton from "../../components/LinkButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin: 0 auto;
  /* padding-top: 4.4rem; */

  align-items: center;
`;

const StyledNotesListView = styled.div`
  padding: 1rem 0;

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
  const { isAuthenticated } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      {isAuthenticated ? (
        <AddNote />
      ) : (
        <LinkButton to="/signup">Signup to Drop Notes</LinkButton>
      )}
      <StyledNotesListView>
        {notes.map((n) => (
          <NoteCardItem key={n.id} item={n} />
        ))}
      </StyledNotesListView>
    </Container>
  );
}

export default NotesListView;
