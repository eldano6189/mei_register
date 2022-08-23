import styles from "./PDFPrintout.module.css";
import { useContext } from "react";
import Data from "../../context/context";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { Rover } from "../../data/932/Landrover";
import { AllOthers } from "../../data/932/AllOthers";
import { All } from "../../data/933/All";

export const PDF932 = ({ data }) => {
  const { user } = useContext(Data);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const handle932Download = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      html: "#table-932",
      theme: "grid",
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      showHead: "firstPage",
      styles: { fontSize: 9 },
      alternateRowStyles: { fillColor: [248, 248, 248] },
    });
    doc.save(`${data.vrn}_932_Inspection.pdf`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table} id="table-932">
        <thead>
          <tr>
            <th colSpan="3">INSPECTOR: {user.username}</th>
            <th colSpan="1">932 Inspection Sheet</th>
          </tr>
          <tr>
            <th colSpan="3">VRN: {data.vrn}</th>
            <th colSpan="1">DATE: {`${day}/${month + 1}/${year}`}</th>
          </tr>
          <tr>
            <th colSpan="3">INSPECTION TYPE: MEI / 6MSI</th>
            <th colSpan="1">DGVW: {data.dgvw}Kg</th>
          </tr>
          <tr>
            <th colSpan="3">RESULT: FF / LR / NTWY</th>
            <th colSpan="1">DTP: {data.dtp}</th>
          </tr>
          <tr>
            <th colSpan="3">ODOMETER: </th>
            <th colSpan="1">RPC: {data.rpc}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>IM</th>
            <th>Sentence</th>
            <th>Description</th>
            <th>Remarks</th>
          </tr>
          {data.type === "LANDROVER"
            ? Rover.map((item, index) => {
                const specific = data.mot[index];
                return (
                  <tr key={index}>
                    <td>{item.im}</td>
                    <td>{specific === "N/A" ? "N/A" : ""}</td>
                    <td>{item.desc}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                  </tr>
                );
              })
            : AllOthers.map((item, index) => {
                const specific = data.mot[index];
                return (
                  <tr key={index}>
                    <td>{item.im}</td>
                    <td>{specific === "N/A" ? "N/A" : ""}</td>
                    <td>{item.desc}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <button className="button" onClick={handle932Download}>
        932
      </button>
    </div>
  );
};

export const PDF933 = ({ data }) => {
  const { user } = useContext(Data);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const handle933Download = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      html: "#table-933",
      theme: "grid",
      headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
      showHead: "firstPage",
      styles: { fontSize: 9 },
      alternateRowStyles: { fillColor: [248, 248, 248] },
    });
    doc.save(`${data.vrn}_933_Inspection.pdf`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table} id="table-933">
        <thead>
          <tr>
            <th colSpan="3">INSPECTOR: {user.username}</th>
            <th colSpan="1">933 Inspection Sheet</th>
          </tr>
          <tr>
            <th colSpan="3">VRN: {data.vrn}</th>
            <th colSpan="1">DATE: {`${day}/${month + 1}/${year}`}</th>
          </tr>
          <tr>
            <th colSpan="3">INSPECTION TYPE: MEI / 6MSI</th>
            <th colSpan="1">DGVW: {data.dgvw}Kg</th>
          </tr>
          <tr>
            <th colSpan="3">RESULT: FF / LR / NTWY</th>
            <th colSpan="1">DTP: {data.dtp}</th>
          </tr>
          <tr>
            <th colSpan="3">ODOMETER: </th>
            <th colSpan="1">RPC: {data.rpc}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>IM</th>
            <th>Sentence</th>
            <th>Description</th>
            <th>Remarks</th>
          </tr>
          {All.map((item, index) => {
            const specific = data.operational[index];
            return (
              <tr key={index}>
                <td>{item.im}</td>
                <td>{specific === "N/A" ? "N/A" : ""}</td>
                <td>{item.desc}</td>
                <td>{""}</td>
                <td>{""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="button" onClick={handle933Download}>
        933
      </button>
    </div>
  );
};
