import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import Button from "./Button";

const ZOOM_LEVEL = 50;

function Map({ geolocationPosition, getPosition, isLoadingPosition }) {
  const [mapPosition, setMapPosition] = useState([52.5, 13.4]);

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Recenter"}
      </Button>

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
          <Marker position={geolocationPosition}>
            <Popup>
              <span></span> <span>You are here.</span>
            </Popup>
          </Marker>
        )}

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
