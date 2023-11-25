import styled from "styled-components";
import NotesListView from "./NotesListView";
import NotesMap from "./NotesMap";
import Spinner from "../../components/Spinner";
import { useNotes } from "./useNotes";

const StyledNotes = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 3.2rem;

  padding-top: 1rem;
`;

function Notes() {
  const { isLoading } = useNotes();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <StyledNotes>
      <NotesListView />
      <NotesMap />
    </StyledNotes>
  );
}

export default Notes;
