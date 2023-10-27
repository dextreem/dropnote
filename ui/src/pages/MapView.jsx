import { useEffect } from "react";
import Map from "../components/Map";

import styles from "./MapView.module.css";
import { useGeolocation } from "../hooks/useGeolocation";

function MapView() {
  const { getPosition, position, isLoading } = useGeolocation();

  useEffect(getPosition, []);

  return (
    <div className={styles.app}>
      <Map
        geolocationPosition={position}
        getPosition={getPosition}
        isLoadingPosition={isLoading}
      />
    </div>
  );
}

export default MapView;
