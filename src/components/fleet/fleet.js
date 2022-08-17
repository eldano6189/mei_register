import styles from "./fleet.module.css";
import { Vehicles } from "../../data/Vehicles";

const Fleet = () => {
  return (
    <table className={styles.table}>
      <tr>
        <th>
          <h2>Type</h2>
        </th>
        <th>
          <h2>VRN</h2>
        </th>
        <th>
          <h2>Desc</h2>
        </th>
        <th>
          <h2>932</h2>
        </th>
        <th>
          <h2>933</h2>
        </th>
        {Vehicles.map((veh, index) => {
          return (
            <tr key={index}>
              <td>
                <p>{veh.type}</p>
              </td>
              <td>
                <p>{veh.vrn}</p>
              </td>
              <td>
                <p>{veh.desc}</p>
              </td>
              <td>{veh.type}</td>
              <td>{veh.type}</td>
            </tr>
          );
        })}
      </tr>
    </table>
  );
};

export default Fleet;
