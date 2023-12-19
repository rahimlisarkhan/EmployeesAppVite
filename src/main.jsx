import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./shared/store/global/GlobalProvider.jsx";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <Router>
        <App />
        <ToastContainer theme="dark" />
      </Router>
    </GlobalProvider>
  </QueryClientProvider>
);
