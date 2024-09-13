import styled from "styled-components";
import Button from "../../components/Button";
import { devices } from "../../styles/breakpoints";

const StyledNotesListMapToggle = styled.div`
  display: none;

  @media ${devices.tablet} {
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
      <StyledButton>Show As List</StyledButton>
      <StyledButton>Show on Map</StyledButton>
    </StyledNotesListMapToggle>
  );
}

export default NotesListMapToggle;
