import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ManageProductsProvider } from "./Context/ManageProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ManageProductsProvider>
      <App />
    </ManageProductsProvider>
  </React.StrictMode>
);
