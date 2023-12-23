import styled from "styled-components";
import NotesListView from "./NotesListView";
import NotesMap from "./NotesMap";
import Spinner from "../../components/Spinner";
import { useNotes } from "./useNotes";
import useGeolocation from "../../states/geolocation";
import { useEffect } from "react";

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
  const { isLoading: isLoadingNotes } = useNotes();
  const { getCurrentLocation, isLoading: isLoadingLocation } = useGeolocation();
  useEffect(() => getCurrentLocation(), [getCurrentLocation]);

  if (isLoadingLocation || isLoadingNotes) {
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
