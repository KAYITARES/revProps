import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function Index() {
  return <App />;
}

const zj = ReactDOM.createRoot(document.getElementById("root"));
zj.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
