import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useDarkMode } from "../../context/DarkModeContext";
import { notes } from "../../../data/notes.json";
import MapPopupMarker from "./MapPopupMarker";

const ZOOM_LEVEL = 16;

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
`;

const NotesHeightContainer = styled.div`
  padding: 4rem;
  height: 100%;
`;

function NotesMap({ className }) {
  const { isDarkMode } = useDarkMode();

  const currentLocation = [notes[0].position.lat, notes[0].position.lng].map(
    (l) => l - 0.001
  );

  return (
    <NotesHeightContainer className={isDarkMode ? className : ""}>
      <StyledMapContainer
        center={currentLocation}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {currentLocation && (
          <MapPopupMarker type="user" position={currentLocation}>
            <span>You are here</span>
          </MapPopupMarker>
        )}

        {notes &&
          notes.map((note) => (
            <MapPopupMarker type="note" key={note.id} position={note.position}>
              <span>{note.text}</span>
            </MapPopupMarker>
          ))}

        <ChangeCenter position={currentLocation} />
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
