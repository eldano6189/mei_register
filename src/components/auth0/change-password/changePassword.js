import styles from "./changePassword.module.css";
import { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import Data from "../../../context/context";

const ChangePassword = () => {
  const { user, setChangePassword } = useContext(Data);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    await Auth.completeNewPassword(user, confirmPassword).then(
      setChangePassword(false)
    );
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__head}>
        <h1>Please change your password</h1>
        <p>
          Your password can be any combination of digits and numbers you wish
          but at least 6 digits long, however you will only be able to confirm
          the password if they match.
        </p>
      </div>
      <div className={styles.container__body}>
        <div className={styles.container__input}>
          <p>New password</p>
          <input type="password" onChange={(e) => handleNewPassword(e)} />
        </div>
        <div className={styles.container__input}>
          <p>Confirm password</p>
          <input type="password" onChange={(e) => handleConfirmPassword(e)} />
        </div>
      </div>
      <div className={styles.container__foot}>
        {newPassword.length >= 6 &&
          confirmPassword.length >= 6 &&
          newPassword === confirmPassword && (
            <button onClick={handleChangePassword}>Confirm</button>
          )}
      </div>
    </div>
  );
};

export default ChangePassword;
