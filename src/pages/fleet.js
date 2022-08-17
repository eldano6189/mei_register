import { useState, useEffect } from "react";
import styles from "../styles/fleet.module.css";
import { Link } from "react-router-dom";
import { Vehicles } from "../data/vehicles";
import Landrover from "../components/svg/Landrover";
import MAN from "../components/svg/Man";
import TRL from "../components/svg/Trl";
import Feps from "../components/svg/FEPS";

const Fleet = () => {
  const [filter, setFilter] = useState([]);

  const [landrover, setLandrover] = useState(0);
  const [man, setMan] = useState(0);
  const [trl, setTrl] = useState(0);
  const [feps, setFeps] = useState(0);

  const getVehTotals = (platform) =>
    Vehicles.reduce((acc, val) => {
      return acc + (val.type === platform);
    }, 0);

  useEffect(() => {
    setLandrover(getVehTotals("LANDROVER"));
    setMan(getVehTotals("MAN"));
    setTrl(getVehTotals("TRL"));
    setFeps(getVehTotals("FEPS"));
  }, []);

  return (
    <div className={styles.container__page}>
      <div className={styles.container__panel}>
        <h1>Fleet {filter}</h1>
        <ul>
          <li>
            <button onClick={() => setFilter([])}>
              All ({Vehicles.length})
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("landrover".toUpperCase())}>
              Landrover ({landrover})
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("man".toUpperCase())}>
              MAN ({man})
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("trl".toUpperCase())}>
              TRL ({trl})
            </button>
          </li>
          <li>
            <button onClick={() => setFilter("feps".toUpperCase())}>
              FEPS ({feps})
            </button>
          </li>
        </ul>
      </div>
      <ul className={styles.container__cards}>
        {Vehicles.filter(
          (vrn) => vrn.vrn.includes(filter) || vrn.type.includes(filter)
        ).map((veh, index) => {
          return (
            <li className={styles.card} key={index}>
              <div className={styles.card__text}>
                <h2>{veh.vrn}</h2>
                <p>{veh.desc}</p>
              </div>
              <div className={styles.container__img}>
                {veh.type === "LANDROVER" ? (
                  <Landrover />
                ) : veh.type === "MAN" ? (
                  <MAN />
                ) : veh.type === "TRL" ? (
                  <TRL />
                ) : (
                  <Feps />
                )}
                <p>{veh.info !== "NIL" && veh.info}</p>
              </div>
              <ul className={styles.print__buttons}>
                <li>
                  <Link to={`/${veh.vrn}`}>
                    <button>View</button>
                  </Link>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fleet;
