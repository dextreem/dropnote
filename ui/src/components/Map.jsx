import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";

import styles from "./Map.module.css";
import MapPopupMarker from "./MapPopupMarker";

import { useGeolocation } from "../contexts/GeolocationContext";

const ZOOM_LEVEL = 20;

function Map() {
  const [mapPosition, setMapPosition] = useState([52.5, 13.4]);
  const { geolocation: geolocationPosition, notes } = useGeolocation();

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {geolocationPosition && (
          <MapPopupMarker type="user" position={geolocationPosition}>
            <span>You are here</span>
          </MapPopupMarker>
        )}

        {notes &&
          notes.map((note) => (
            <MapPopupMarker type="note" key={note.id} position={note.position}>
              <span>{note.text}</span>
            </MapPopupMarker>
          ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
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

export default Map;
