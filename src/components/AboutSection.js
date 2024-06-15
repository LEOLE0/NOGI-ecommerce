import React from "react";
import styled from "styled-components";
import bgImage from "../assets/bg-about.jpg";
import 'aos/dist/aos.css'; // Assure que les styles de AOS sont bien importés

const Section = styled.section`
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, Helvetica, Arial, Apple Color Emoji,
    Segoe UI Emoji;
  font-weight: 400;
  display: flex;
  color: #ffffff;
`;

const LeftColumn = styled.div`
  flex: 1;
  background: url(${bgImage}) center/cover no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 9, 25, 1) 80%
    );
    z-index: 0;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  background: #000919;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 100px;
`;

const ContentWrapper = styled.div`
  z-index: 1;
  padding: 90px;
  data-aos="fade-left"; // Applique une animation "fade-left"
`;

const Title = styled.h2`
  text-align: center;
  color: #dedede;
  font-size: 2.3rem;
  margin-bottom: 30px;
  data-aos="fade-right"; // Applique une animation "fade-right"
`;

const Content = styled.p`
  background: rgba(10, 147, 196, 0.3);
  border-radius: 190px 0px;
  color: #dedede;
  text-align: justify;
  padding: 80px;
  font-size: 1.3rem;
  data-aos="fade-up"; // Applique une animation "fade-up"
`;

const Quote = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 600;
  word-spacing: 3px;
  color: rgba(33, 174, 225, 1);
  padding: 20px;
  margin-top: 120px;
  data-aos="zoom-in"; // Applique une animation "zoom-in"
`;

const AboutSection = () => {
  return (
    <Section>
      <LeftColumn data-aos="fade-right"> {/* Effet sur la colonne de gauche */}
        {/* vide Left Column for background and filter */}
      </LeftColumn>
      <RightColumn data-aos="fade-left"> {/* Effet sur la colonne de droite */}
        <ContentWrapper>
          <Content data-aos="zoom-in-up">
          <Title>A PROPOS</Title>
            Chez NOGI, nous sommes dédiés à la fourniture d’équipements de haute
            qualité qui répondent aux exigences des athlètes de combat les plus
            engagés. Notre mission est de soutenir les guerriers du quotidien
            dans leur quête d’excellence, en leur offrant des produits qui
            allient innovation, confort et performance.
          </Content>
          <Quote data-aos="fade-down-right">
            "Le talent n’existe pas, nous sommes tous égaux en tant qu’êtres
            humains. Vous pourriez être quelqu’un de spécial si vous croyez en
            vous."
            <br />
            - Conor McGregor -
          </Quote>
        </ContentWrapper>
      </RightColumn>
    </Section>
  );
};

export default AboutSection;