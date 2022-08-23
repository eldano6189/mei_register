//Style imports
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  );
};

export default Loading;
