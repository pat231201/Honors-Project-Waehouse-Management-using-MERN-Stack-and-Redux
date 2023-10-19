import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Login />
  </>
);

// reportWebVitals();
