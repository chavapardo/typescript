import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles"; // Importa los estilos globales

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <GlobalStyles /> {/* Aplica los estilos globales */}
      <App />
  </React.StrictMode>
);