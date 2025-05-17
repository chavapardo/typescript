import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #006341;
  color: #fff;
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Links = styled.div`
  margin: 1rem 0;
  a {
    color: #fbfbfb;
    margin: 0 1rem;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      color: #010101;
    }
  }
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  a {
    margin: 0 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.2s;
    &:hover {
      color: #000000;
    }
  }
`;

const Copy = styled.div`
  font-size: 0.95rem;
  color: #c8e6c9;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterContent>
      <Links>
        <a href="/">Inicio</a>
        <a href="/acerca">Acerca</a>
        <a href="/contacto">Contacto</a>
      </Links>
      <SocialLinks>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </SocialLinks>
      <Copy>© {new Date().getFullYear()} México Maravilloso. Todos los derechos reservados.</Copy>
    </FooterContent>
  </FooterContainer>
);

export default Footer;