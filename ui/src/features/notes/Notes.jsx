import styled from "styled-components";
import NotesListView from "./NotesListView";
import NotesMap from "./NotesMap";
import Spinner from "../../components/Spinner";
import { useNotes } from "./useNotes";
import useGeolocation from "../../states/geolocation";
import { useEffect } from "react";
import NotesListMapToggle from "./NotesListMapToggle";

const StyledNotes = styled.main`
  display: grid;
  grid-template-columns: minmax(30rem, 1fr) 3fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1.2rem;
`;

function Notes() {
  const { isLoading: isLoadingNotes } = useNotes();
  const { getCurrentLocation, isLoading: isLoadingLocation } = useGeolocation();
  useEffect(() => getCurrentLocation(), [getCurrentLocation]);

  if (isLoadingLocation || isLoadingNotes) {
    return <Spinner />;
  }

  return (
    <div>
      <NotesListMapToggle />
      <StyledNotes>
        <NotesListView />
        <NotesMap />
      </StyledNotes>
    </div>
  );
}

export default Notes;
