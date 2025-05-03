import React from "react";
import styled from "styled-components";

// Ajustamos el pie de página
const FooterContainer = styled.footer`
  background-color: #006341;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  width: 100%; /* Ocupa el ancho completo */
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>© 2025 Información sobre México | Creado por chavapardo</p>
    </FooterContainer>
  );
};

export default Footer;