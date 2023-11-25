import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./shared/store/global/GlobalProvider.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
        <ToastContainer theme="dark" />
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);
