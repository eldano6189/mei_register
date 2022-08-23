import styles from "./logoutModal.module.css";
import { useEffect, useState, useContext } from "react";
import Data from "../../context/context";
import { useLocation } from "react-router-dom";

const LogoutModal = () => {
  const location = useLocation();
  const { setAuthorised } = useContext(Data);
  const countDown = 3600;

  const [modalOpen, setModalOpen] = useState(false);
  const [logoutTimer, setLogoutTimer] = useState(countDown);

  const handleCancelLogout = () => {
    setModalOpen(false);
    setLogoutTimer(countDown);
  };

  const handleSignOut = () => {
    setAuthorised(false);
    setModalOpen(false);
  };

  useEffect(() => {
    const timer =
      location.pathname !== "/login" && logoutTimer > 0
        ? setInterval(() => {
            setLogoutTimer(logoutTimer - 1);
            location.pathname !== "/login" && logoutTimer <= 60
              ? setModalOpen(true)
              : setModalOpen(false);
          }, 1000)
        : setLogoutTimer(countDown);

    return () => clearInterval(timer);
  }, [logoutTimer, location]);

  useEffect(() => {
    if (logoutTimer === 0) {
      setAuthorised(false);
      setModalOpen(false);
      setLogoutTimer(countDown);
    }
  }, [logoutTimer, setAuthorised]);

  return (
    <div
      className={styles.container__modal}
      style={{ display: modalOpen && "flex" }}
    >
      <div className={styles.modal}>
        <div className={styles.container__head}>
          <h1>Session</h1>
          <h2>Wish to logout?</h2>
        </div>
        <div className={styles.container__body}>
          <p>
            Your session will expire in <span>{logoutTimer} seconds</span>.
          </p>
        </div>
        <div className={styles.container__foot}>
          <button onClick={handleCancelLogout}>Cancel</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
