import Map from "../components/Map";

import styles from "./MapView.module.css";

function MapView() {
  return (
    <div className={styles.app}>
      <Map />
    </div>
  );
}

export default MapView;
