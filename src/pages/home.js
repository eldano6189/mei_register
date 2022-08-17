import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container__page}>
      <ul>
        <li className={styles.tile}>
          <div className={styles.tile__text}>
            <h1>Fleet</h1>
            <h2>See the fleet</h2>
            <p>
              Get a view of the current fleet. Selecting the corresponding tile
              will take you to the detailed page of requirements for that
              specific platforms inspection.
            </p>
          </div>
          <Link to="/fleet">
            <button>Open</button>
          </Link>
        </li>
        <li className={styles.tile}>
          <div className={styles.tile__text}>
            <h1>Notes</h1>
            <h2>Create, view and delete!</h2>
            <p>
              A place to create, view and delete notes! Handy for reminders on
              extinguishers and safety notices.
            </p>
          </div>
          <Link to="/notes">
            <button>Open</button>
          </Link>
        </li>
      </ul>
      <ul>
        <li className={styles.tile}>
          <div className={styles.tile__text}>
            <h1>References</h1>
            <h2>Policy links</h2>
            <p>
              This is where you will find links to the most current civilian and
              military policies.
            </p>
          </div>
          <Link to="/references">
            <button>Open</button>
          </Link>
        </li>
        <li className={styles.tile}>
          <div className={styles.tile__text}></div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
