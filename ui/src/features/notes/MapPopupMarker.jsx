import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";

// const ICON_SIZE = 50;

function getMarkerIcon(type) {
  switch (type) {
    case "user":
      return getUserIcon();
    case "note":
      return getNoteIcon();
    default:
      throw new Error("Unknown MapPopupMarker type", type);
  }
}

function getUserIcon() {
  return getIcon({ color: "red" });
}

function getNoteIcon() {
  return getIcon({ color: "yellow" });
}

function getIcon({ color }) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

const StyledMarker = styled(Marker)`
  background-color: #123456;
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #ffffff;
`;

function MapPopupMarker({ position, type, children }) {
  return (
    <StyledMarker position={position} icon={getMarkerIcon(type)}>
      <Popup>{children}</Popup>
    </StyledMarker>
  );
}

export default MapPopupMarker;
