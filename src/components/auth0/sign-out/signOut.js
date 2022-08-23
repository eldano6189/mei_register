import { useContext } from "react";
import styles from "./signOut.module.css";
import { Auth } from "aws-amplify";
import Data from "../../../context/context";

const SignOut = ({ children }) => {
  const { setAuthorised } = useContext(Data);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setAuthorised(false);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  return (
    <span className={styles.container} onClick={signOut}>
      {children}
    </span>
  );
};

export default SignOut;
