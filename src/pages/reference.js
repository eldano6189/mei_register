//Data imports
import { PolicyLinks } from "../data/policyLinks";

//Style imports
import styles from "../styles/reference.module.css";

const References = () => {
  return (
    <div className={styles.container__page}>
      <div className={styles.container__panel}>
        <h1>References</h1>
        <h2>
          Below is a list of general and specific platform links to help with
          inspections.
        </h2>
      </div>
      <ul className={styles.container__links}>
        {PolicyLinks.map((link, index) => {
          return (
            <li key={index} className={styles.link}>
              <h2>{link.platform}</h2>
              <ul>
                {link.links.map((li, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={li.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{li.title}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default References;
