import styled from "styled-components";
import Button from "../../components/Button";

const StyledNotesListMapToggle = styled.div`
  display: none;

  @media (max-width: 600pt) {
    display: flex;
    gap: 0.6rem;
    margin: 0.3rem 0.6rem;
  }
`;

const StyledButton = styled(Button)`
  flex: 1;
`;

function NotesListMapToggle() {
  return (
    <StyledNotesListMapToggle>
      <StyledButton>Notes List</StyledButton>
      <StyledButton>Notes Map</StyledButton>
    </StyledNotesListMapToggle>
  );
}

export default NotesListMapToggle;
