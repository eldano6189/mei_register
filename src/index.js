import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataWrapper } from "./context/context";

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
