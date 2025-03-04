import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import "./Style/detail.css";
import "./Style/Write.css";
import "./Style/CounityWrite.css"
import "./Style/comunity.css"

import reportWebVitals from "./reportWebVitals";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
