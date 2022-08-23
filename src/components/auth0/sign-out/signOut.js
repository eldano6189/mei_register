//External imports
import { useContext } from "react";
import { Auth } from "aws-amplify";

//Data imports
import Data from "../../../context/context";

//Style imports
import styles from "./signOut.module.css";

const SignOut = ({ children }) => {
  const { setAuthorised } = useContext(Data);

  //Component functions
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
