//External imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Style imports
import "./styles/globals.css";

//Data imports
import { DataWrapper } from "./context/context";

//Component imports
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataWrapper>
  </React.StrictMode>
);
