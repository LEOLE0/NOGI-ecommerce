import React, { useEffect } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton"; // Assure-toi que le chemin est correct
import bgImage from "../assets/bg-welcome.jpg";
import 'aos/dist/aos.css'; // Assure-toi que les styles de AOS sont importés si ce n'est pas déjà fait globalement
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Section = styled.section`
  background: url(${bgImage}) center center/cover no-repeat;
  padding: 350px;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, Helvetica, Arial, Apple Color Emoji,
    Segoe UI Emoji;
  font-weight: 100;
  color: #f7f7f7;
  height: 90vh;
  margin: -4px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 9, 25, 1) 8%,
      rgba(0, 0, 0, 0) 90%
    );
    z-index: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 50px; // ajusté pour un meilleur espacement
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 90px; // ajusté pour un meilleur espacement
`;

function WelcomeSection() {
   // Ajoute useEffect ici pour rafraîchir AOS après le rendu
   useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <Section >
      <Title data-aos="fade-up" data-aos-delay="800">BIENVENUE CHEZ NOGI</Title>
      <Subtitle data-aos="fade-down" data-aos-delay="800">
        Le meilleur équipement pour vos entraînements et compétitions.
      </Subtitle>
      <Link to="/inscription-connexion"> 
      <StyledButton>
        Connexion / Inscription
      </StyledButton>
      </Link>
    </Section>
  );
}

export default WelcomeSection;