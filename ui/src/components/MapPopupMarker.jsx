import { Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

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
  return getIcon({ emojiIcon: "📍" });
}

function getNoteIcon() {
  return getIcon({ emojiIcon: "🗒️" });
}

function getIcon({ emojiIcon }) {
  return Leaflet.divIcon({
    html: emojiIcon,
  });
}

function MapPopupMarker({ position, type, children }) {
  const icon = getMarkerIcon(type);
  return (
    <Marker className="marker" position={position} icon={icon}>
      <Popup>{children}</Popup>
    </Marker>
  );
}

export default MapPopupMarker;
