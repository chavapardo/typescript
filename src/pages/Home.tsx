import React from "react";
import styled from "styled-components";

// Ajustamos el contenedor principal
const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #f4f4f4;
  min-height: 80vh; /* Ocupa al menos el 80% de la altura del viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #006341;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px; /* Limita el ancho del texto */
`;

const Home: React.FC = () => {
  return (
    <Section id="home">
      <Title>Bienvenido a México</Title>
      <Paragraph>
        México es un país lleno de historia, cultura y belleza natural. Descubre
        más sobre este increíble país en las siguientes secciones.
      </Paragraph>
    </Section>
  );
};

export default Home;