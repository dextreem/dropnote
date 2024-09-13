import styled from "styled-components";
import Button from "../../components/Button";
import { devices } from "../../styles/breakpoints";
import useUiState, { NOTES_COMPONENTS } from "../../states/ui";

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
  const listVisible = useUiState((state) =>
    state.isVisible(NOTES_COMPONENTS.NOTES_LIST)
  );
  const mapVisible = useUiState((state) =>
    state.isVisible(NOTES_COMPONENTS.NOTES_MAP)
  );
  const setVisible = useUiState((state) => state.setNoteVisibleComponent);

  return (
    <StyledNotesListMapToggle>
      {!listVisible && (
        <StyledButton
          variation="secondary"
          onClick={() => setVisible(NOTES_COMPONENTS.NOTES_LIST)}
        >
          Show As List
        </StyledButton>
      )}
      {!mapVisible && (
        <StyledButton
          variation="secondary"
          onClick={() => setVisible(NOTES_COMPONENTS.NOTES_MAP)}
        >
          Show on Map
        </StyledButton>
      )}
    </StyledNotesListMapToggle>
  );
}

export default NotesListMapToggle;
