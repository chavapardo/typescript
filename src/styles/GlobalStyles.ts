import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reinicio básico de estilos (opcional) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9; /* Color de fondo global */
    color: #333; /* Color de texto global */
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1; /* Esto permite que el contenido principal ocupe el espacio disponible */
  }
`;

export default GlobalStyles;