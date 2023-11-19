import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const StyledNotesMap = styled.div`
  /* background-color: green; */
  padding: 4rem;
  height: 100%;
`;

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
`;

function NotesMap() {
  return (
    <StyledNotesMap>
      <StyledMapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </StyledNotesMap>
  );
}

export default NotesMap;
