import styles from "./signIn.module.css";
import { Auth } from "aws-amplify";
import { useEffect, useContext, useState } from "react";
import Tick from "../../svg/tick";
import Data from "../../../context/context";
import Loading from "../../loading/loading";

const SignIn = () => {
  const { user, setUser, setChangePassword, setAuthorised } = useContext(Data);
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await Auth.signIn(user.username, user.password)
      .then((user) => {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          setChangePassword(true);
          setUser(user);
          setLoading(false);
        } else {
          setAuthorised(true);
          setUser(user);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setUserError(true);
      });
  };

  useEffect(() => {
    const getDetails = JSON.parse(localStorage.getItem("RememberLogin"));
    getDetails && setUser(getDetails);
  }, [setUser]);

  useEffect(() => {
    user.remember
      ? localStorage.setItem("RememberLogin", JSON.stringify(user))
      : localStorage.removeItem("RememberLogin");
  }, [user]);

  const handleUserName = (e) => {
    setUserError(false);
    user.username = e.target.value;
    setUser({ ...user });
  };

  const handlePassword = (e) => {
    setUserError(false);
    user.password = e.target.value;
    setUser({ ...user });
  };

  const handleRememberPassword = () => {
    if (user.username !== "" && user.password !== "") {
      user.remember = !user.remember;
    } else {
      user.remember = false;
    }
    setUser({ ...user });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h1>Sign In</h1>
        <h2>1MI Bn, Inspection Applicabilty Register</h2>
      </div>
      <div className={styles.container__input}>
        <p>Username</p>
        <input
          required
          defaultValue={user.username}
          type="text"
          onChange={(e) => handleUserName(e)}
        />
      </div>
      <div className={styles.container__input}>
        <p>Password</p>
        <input
          required
          defaultValue={user.password}
          type="password"
          onChange={(e) => handlePassword(e)}
        />
      </div>
      <div className={styles.container__remember}>
        <div
          className={styles.container__remember_checkbox}
          onClick={handleRememberPassword}
        >
          {user.remember && <Tick />}
        </div>
        <p>Remember Me</p>
      </div>
      <div className={styles.container__button}>
        <button onClick={handleLogin}>
          {loading ? <Loading /> : "Sign In"}
        </button>
        {userError && <p>Incorrect username or password.</p>}
      </div>
    </div>
  );
};

export default SignIn;
