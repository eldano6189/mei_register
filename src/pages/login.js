//External imports
import { useContext } from "react";

//Data imports
import Data from "../context/context";

//Style imports
import styles from "../styles/login.module.css";

//Component imports
import ModelScene from "../components/scene/scene";
import HammerTongues from "../components/models/hammerTongues";
import SignIn from "../components/auth0/sign-in/signIn";
import ChangePassword from "../components/auth0/change-password/changePassword";

const Login = () => {
  const { changePassword } = useContext(Data);

  return (
    <div className={styles.container__page}>
      <div className={styles.container__login}>
        {changePassword ? <ChangePassword /> : <SignIn />}
      </div>

      <div className={styles.container__canvas}>
        <ModelScene>
          <HammerTongues />
        </ModelScene>
      </div>
    </div>
  );
};

export default Login;
