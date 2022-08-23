import styles from "./background.module.css";
import Reme from "../svg/reme";
import Eagle from "../svg/eagle";

const Background = () => {
  return (
    <div className={styles.container__background}>
      <Reme />
      <Eagle />
    </div>
  );
};

export default Background;
