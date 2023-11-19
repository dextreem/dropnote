import styled from "styled-components";

import { notes } from "../../../data/notes.json";
import NoteCardItem from "./NoteCardItem";

const StyledNotesListView = styled.div`
  padding: 4rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  max-height: 78vh;
  overflow-y: auto;
`;

function NotesListView() {
  return (
    <StyledNotesListView>
      {notes.map((n) => (
        <NoteCardItem key={n.id} item={n} />
      ))}
    </StyledNotesListView>
  );
}

export default NotesListView;
