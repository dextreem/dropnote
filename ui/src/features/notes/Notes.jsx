import styled from "styled-components";
import NotesListView from "./NotesListView";
import NotesMap from "./NotesMap";

const StyledNotes = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 3.2rem;
`;

function Notes() {
  return (
    <StyledNotes>
      <NotesListView />
      <NotesMap />
    </StyledNotes>
  );
}

export default Notes;
