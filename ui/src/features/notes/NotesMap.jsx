import styled from "styled-components";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useDarkMode } from "../../context/DarkModeContext";
import MapPopupMarker from "./MapPopupMarker";
import { useNotes } from "./useNotes";
import Spinner from "../../components/Spinner";
import useGeolocation from "../../states/geolocation";

const ZOOM_LEVEL = 16;

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;
`;

const NotesHeightContainer = styled.div`
  /* padding: 4rem; */
  height: 100%;
`;

function NotesMap({ className }) {
  const { isDarkMode } = useDarkMode();
  const { notes, isLoading: isLoadingNotes } = useNotes();
  const { currentLocation, isLoading: isLoadingLocation } = useGeolocation();

  if (isLoadingNotes || isLoadingLocation) {
    return <Spinner />;
  }

  return (
    <NotesHeightContainer className={isDarkMode ? className : ""}>
      <StyledMapContainer
        center={[currentLocation.lat, currentLocation.long]}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {currentLocation && (
          <MapPopupMarker
            type="user"
            position={[currentLocation.lat, currentLocation.long]}
          >
            <span>You are here</span>
          </MapPopupMarker>
        )}

        {notes &&
          notes.map((note) => (
            <MapPopupMarker
              type="note"
              key={note.id}
              position={[note.lat, note.long]}
            >
              <span>{note.text}</span>
            </MapPopupMarker>
          ))}

        <ChangeCenter position={[currentLocation.lat, currentLocation.long]} />
        <DetectClick />
      </StyledMapContainer>
    </NotesHeightContainer>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, ZOOM_LEVEL);
  return null;
}

function DetectClick() {
  useMapEvents({
    click: (e) => console.log(`lat=${e.latlng.lat} - lng=${e.latlng.lng}`),
  });
}

const StyledNotesMap = styled(NotesMap)`
  padding: 4rem;
  height: 100%;

  .leaflet-layer,
  .leaflet-control-zoom-in,
  .leaflet-control-zoom-out,
  .leaflet-control-attribution {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
  }
`;

export default StyledNotesMap;
