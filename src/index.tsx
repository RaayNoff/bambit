import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/style.scss";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
