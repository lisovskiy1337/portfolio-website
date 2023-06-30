import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DarkModeObserver from "./context/DarkModeObserver";
import ScrollObserver from "./context/ScrollObserver";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <DarkModeObserver>
        <App />
      </DarkModeObserver>
    </ScrollObserver>
  </React.StrictMode>
);
