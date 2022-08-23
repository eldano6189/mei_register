//Data imports
import { Rover } from "../data/932/Landrover";
import { AllOthers } from "../data/932/AllOthers";
import { All } from "../data/933/All";

//Style imports
import styles from "../styles/vehicle.module.css";

//Component imports
import Landrover from "../components/svg/Landrover";
import MAN from "../components/svg/Man";
import TRL from "../components/svg/Trl";
import Feps from "../components/svg/FEPS";
import { PDF932, PDF933 } from "../components/PDF-printout/PDFPrintout";

const Vehicle = ({ data }) => {
  return (
    <div className={styles.container__page}>
      <div className={styles.container__vehicle}>
        <div className={styles.container__info}>
          <ul>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>VRN</p>
                <h2>{data.vrn}</h2>
              </div>
              <div className={styles.container__img}>
                {data.type === "LANDROVER" ? (
                  <Landrover />
                ) : data.type === "MAN" ? (
                  <MAN />
                ) : data.type === "TRL" ? (
                  <TRL />
                ) : (
                  <Feps />
                )}
                <p>{data.info !== "NIL" && data.info}</p>
              </div>
            </li>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>NSN</p>
                <h2>{data.nsn}</h2>
              </div>
              <div className={styles.card__text}>
                <p>Description</p>
                <h2>{data.desc}</h2>
              </div>
              <div className={styles.card__text}>
                <p>Extra Info</p>
                <h2>{data.info}</h2>
              </div>
            </li>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>Engine No</p>
                <h2>{data.engine}</h2>
              </div>
              <div className={styles.card__text}>
                <p>Chassis No</p>
                <h2>{data.chassis}</h2>
              </div>
            </li>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>Class</p>
                <h2>{data.class}</h2>
              </div>
              <div className={styles.card__text}>
                <p>DTP</p>
                <h2>{data.dtp}</h2>
              </div>
              <div className={styles.card__text}>
                <p>RPC</p>
                <h2>{data.rpc}</h2>
              </div>
            </li>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>Common AESP</p>
                <h2>{data.aesp}</h2>
              </div>
              <div className={styles.card__text}>
                <p>Asset Code</p>
                <h2>{data.ac}</h2>
              </div>
            </li>
            <li className={styles.info__card}>
              <div className={styles.card__text}>
                <p>DGVW</p>
                <h2>{data.dgvw} Kg</h2>
              </div>
              <div className={styles.card__text}>
                <p>ULW</p>
                <h2>{data.ulw} Kg</h2>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.container__sheets}>
          <h2>Inspection Sheets</h2>
          <PDF932 data={data} />
          <PDF933 data={data} />
        </div>
        <div className={styles.tooltip__hint}>
          <p>Hover over the IM reference numbers to see the description.</p>
        </div>
        <div className={styles.container__quickview}>
          <div className={styles.quickview__text}>
            <h3>932 Quickview</h3>
          </div>
          <div className={styles.container__table}>
            <table>
              <tbody>
                <tr>
                  {data.type === "LANDROVER"
                    ? Rover.map((veh, index) => {
                        return (
                          <th key={index}>
                            <p>{veh.im}</p>
                            <span>
                              <h2>
                                {veh.im} - {veh.desc}
                              </h2>
                            </span>
                          </th>
                        );
                      })
                    : AllOthers.map((veh, index) => {
                        return (
                          <th key={index}>
                            <p>{veh.im}</p>
                            <span>
                              <h2>
                                {veh.im} - {veh.desc}
                              </h2>
                            </span>
                          </th>
                        );
                      })}
                </tr>
                <tr>
                  {data.mot.map((veh, index) => {
                    return (
                      <th
                        key={index}
                        style={{
                          backgroundColor:
                            veh === "Y"
                              ? "rgb(var(--color-1))"
                              : veh === "EX"
                              ? "rgb(var(--color-1) / 0.25)"
                              : null,
                        }}
                      >
                        <p>{veh}</p>
                      </th>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.quickview__text}>
            <h3>933 Quickview</h3>
          </div>
          <div className={styles.container__table}>
            <table>
              <tbody>
                <tr>
                  {All.map((veh, index) => {
                    return (
                      <th key={index}>
                        <p>{veh.im}</p>
                        <span>
                          <h2>
                            {veh.im} - {veh.desc}
                          </h2>
                        </span>
                      </th>
                    );
                  })}
                </tr>
                <tr>
                  {data.operational.map((veh, index) => {
                    return (
                      <th
                        key={index}
                        style={{
                          backgroundColor:
                            veh === "Y" ? "rgb(var(--color-1))" : null,
                        }}
                      >
                        <p>{veh}</p>
                      </th>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
