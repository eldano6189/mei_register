import styles from "../styles/login.module.css";
import { useContext } from "react";
import Tick from "../components/svg/tick";
import { ModelScene } from "../components/scene/scene";
import Reme from "../components/models/Reme";
import Data from "../context/context";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginDetails, setLoginDetails } = useContext(Data);

  const handleUserName = (e) => {
    loginDetails.username = e.target.value;
    setLoginDetails({ ...loginDetails });
  };

  const handlePassword = (e) => {
    loginDetails.password = e.target.value;
    setLoginDetails({ ...loginDetails });
  };

  const handleRememberPassword = () => {
    if (loginDetails.username !== "" && loginDetails.password !== "") {
      loginDetails.remember = !loginDetails.remember;
    } else {
      loginDetails.remember = false;
    }
    setLoginDetails({ ...loginDetails });
  };

  return (
    <div className={styles.container__page}>
      <div className={styles.container__login}>
        <div className={styles.container__title}>
          <h1>Sign In</h1>
          <h2>1MI Bn, Inspection Applicabilty Register</h2>
        </div>
        <div className={styles.container__input}>
          <p>Username</p>
          <input
            required
            defaultValue={loginDetails.username}
            type="text"
            onChange={(e) => handleUserName(e)}
          />
        </div>
        <div className={styles.container__input}>
          <p>Password</p>
          <input
            required
            defaultValue={loginDetails.password}
            type="password"
            onChange={(e) => handlePassword(e)}
          />
        </div>
        <div className={styles.container__remember}>
          <div
            className={styles.container__remember_checkbox}
            onClick={handleRememberPassword}
          >
            {loginDetails.remember && <Tick />}
          </div>
          <p>Remember Me</p>
        </div>
        <div className={styles.container__button}>
          <Link to="/">
            <button>Sign In</button>
          </Link>
        </div>
      </div>

      <div className={styles.container__canvas}>
        <ModelScene>
          <Reme />
        </ModelScene>
      </div>
    </div>
  );
};

export default Login;
