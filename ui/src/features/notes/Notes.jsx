import styled, { css } from "styled-components";
import NotesListView from "./NotesListView";
import NotesMap from "./NotesMap";
import Spinner from "../../components/Spinner";
import { useNotes } from "./useNotes";
import useGeolocation from "../../states/geolocation";
import { useEffect } from "react";
import NotesListMapToggle from "./NotesListMapToggle";
import { devices } from "../../styles/breakpoints";
import useUiState, { NOTES_COMPONENTS } from "../../states/ui";

const StyledNotes = styled.main`
  display: grid;
  grid-template-columns: minmax(30rem, 1fr) 3fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1.2rem;

  @media ${devices.tablet} {
    display: flex;
    gap: 0.6rem;
    margin: 0.3rem 0.6rem;
    height: 100%;
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;

  ${(props) =>
    props.$hide === "true" &&
    css`
      @media ${devices.tablet} {
        display: none;
      }
    `};
`;

function Notes() {
  const { isLoading: isLoadingNotes } = useNotes();
  const { getCurrentLocation, isLoading: isLoadingLocation } = useGeolocation();
  const listVisible = useUiState((state) =>
    state.isVisible(NOTES_COMPONENTS.NOTES_LIST)
  );
  const mapVisible = useUiState((state) =>
    state.isVisible(NOTES_COMPONENTS.NOTES_MAP)
  );
  useEffect(() => getCurrentLocation(), [getCurrentLocation]);

  if (isLoadingLocation || isLoadingNotes) {
    return <Spinner />;
  }

  return (
    <div>
      <NotesListMapToggle />
      <StyledNotes>
        <StyledDiv $hide={(!listVisible).toString()}>
          <NotesListView />
        </StyledDiv>
        <StyledDiv $hide={(!mapVisible).toString()}>
          <NotesMap />
        </StyledDiv>
      </StyledNotes>
    </div>
  );
}

export default Notes;
