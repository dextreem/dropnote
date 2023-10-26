import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.Homepage}>
      {/* <PageNav /> */}
      <section>
        <h1>Drop a Note</h1>
        <h2>Leave nothing but a footprint!</h2>
        <p>Lorem ipsum blablabla</p>
        <Link to="/login" className="cta">
          Start Now
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
