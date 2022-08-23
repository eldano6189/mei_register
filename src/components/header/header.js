//External imports
import { useLocation, useNavigate } from "react-router-dom";

//Style imports
import styles from "./header.module.css";

//Component imports
import Logout from "../svg/logout";
import Reme from "../svg/reme";
import SignOut from "../auth0/sign-out/signOut";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Component functions
  const back = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container__logo}>
        <div className={styles.logo}>
          <Reme />
        </div>
        <div className={styles.text}>
          <p>1MI Bn, Inspection Applicability</p>
        </div>
      </div>
      <ul>
        {location.pathname === "/" ||
          (location.pathname === "/login" ? null : (
            <li className={styles.list__item}>
              <button onClick={back}>Back</button>
            </li>
          ))}
        {location.pathname !== "/login" && (
          <li className={styles.list__item}>
            <SignOut>
              <Logout />
            </SignOut>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
