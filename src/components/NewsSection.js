import React from "react";
import styled from "styled-components";
import 'aos/dist/aos.css'; // Assure que les styles de AOS sont bien importés
import bgImage from "../assets/bg-news.jpg"; // Assure-toi que le chemin vers l'image est correct



const NewsSection = styled.section`
font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, Helvetica, Arial, Apple Color Emoji,
    Segoe UI Emoji;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  color: #ffffff;
  padding-left: 60px;
`;

const LeftColumn = styled.div`
 background: rgba(11,15,38,0.9);
  border-radius: 30px 0px;
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightColumn = styled.div`
  flex: 1;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  height: 900px;
`;

const Title = styled.h2`
text-align: center;
  color: #dedede;
  font-size: 2.3rem;
  margin-bottom: 30px;
  data-aos="fade-right"; // Applique une animation "fade-right"
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #dedede;
  padding: 50px;
`;

const News = () => {
  return (
    <NewsSection>
      <LeftColumn data-aos="fade-right">
        <Title>Actualités NOGI</Title>
        <Content data-aos="zoom-in-up">
          Découvrez les dernières nouvelles de NOGI, y compris notre expansion
          récente et l'introduction de nouvelles gammes de produits. Ne manquez
          pas nos séances de coaching exclusives, conçues pour vous aider à 
          exceller dans vos disciplines de combat.
        </Content>
      </LeftColumn>
      <RightColumn data-aos="fade-left">
        {/* Le conteneur de droite contient l'image, animée pour apparaître de la droite */}
      </RightColumn>
    </NewsSection>
  );
};

export default News;