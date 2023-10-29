import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

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

function MapPopupMarker({ position, type, children }) {
  return (
    <Marker className="marker" position={position} icon={getMarkerIcon(type)}>
      <Popup>{children}</Popup>
    </Marker>
  );
}

export default MapPopupMarker;
