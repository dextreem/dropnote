import { Link } from "react-router-dom";
import styles from "./SelectView.module.css";

function SelectView() {
  return (
    <div className={styles.app}>
      <Link to="/notelist" className={styles.button}>
        Show Note List
      </Link>
      <Link to="/notemap" className={styles.button}>
        Show Map
      </Link>
      <Link to="/newnote" className={styles.button}>
        Drop Note
      </Link>
    </div>
  );
}

export default SelectView;
