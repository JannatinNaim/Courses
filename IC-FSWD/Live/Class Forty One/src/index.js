import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import StudentContextProvider from "./context/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  </React.StrictMode>
);
