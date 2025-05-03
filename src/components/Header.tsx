import React from "react";
import styled from "styled-components";

// Ajustamos el contenedor para que ocupe el ancho completo
const Nav = styled.nav`
  background-color: #006341;
  padding: 1rem;
  width: 100%; /* Ocupa el ancho completo */
  display: flex;
  justify-content: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 80%; /* Ajusta el ancho del contenido */
  max-width: 1200px; /* Máximo ancho para pantallas grandes */
`;

const Li = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <Li><a href="#home">Inicio</a></Li>
        <Li><a href="#historia">Historia</a></Li>
        <Li><a href="#cultura">Cultura</a></Li>
        <Li><a href="#geografia">Geografía</a></Li>
        <Li><a href="#curiosidades">Curiosidades</a></Li>
      </Ul>
    </Nav>
  );
};

export default Header;