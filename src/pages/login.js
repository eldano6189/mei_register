import styles from "../styles/login.module.css";
import { useContext } from "react";
import { ModelScene } from "../components/scene/scene";
import Reme from "../components/models/Reme";
import SignIn from "../components/auth0/sign-in/signIn";
import Data from "../context/context";
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
          <Reme />
        </ModelScene>
      </div>
    </div>
  );
};

export default Login;
