import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage1 from '../assets/boxe/gantnoir1.png';
import productImage2 from '../assets/boxe/gantred1.png';
import productImage3 from '../assets/boxe/gantgold1.png';
import productImage4 from '../assets/boxe/gantblanc1.png';
import productImage5 from '../assets/mma/gantares1.png';
import productImage6 from '../assets/mma/gantleon1.png';
import productImage7 from '../assets/mma/gantufc1.png';
import productImage8 from '../assets/mma/gantares1.png';
import productImage9 from '../assets/chaussure/luttejaune1.png';
import productImage10 from '../assets/chaussure/lutteblanc1.png';
import productImage11 from '../assets/chaussure/luttebleu1.png';
import productImage12 from '../assets/chaussure/luttepink1.png';

AOS.init();

const EquipementPage = styled.div`
  padding-top: 100px;
`;

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #313131;
  font-family: 'Inter', sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const Card = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 250px;
  height: 520px;
  background: url(${props => props.bgImage}) center/cover no-repeat;
  position: relative;
  color: white;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  margin: 10px 0;
  font-family: 'Inter', sans-serif;
  color: rgba(11,15,38,1);
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(11,15,38,1);
  font-family: 'Inter', sans-serif;
`;

const Equipement = () => {
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  return (
    <>
      <Navbar />
      <EquipementPage>
        <Section>
          <SectionTitle data-aos="fade-up">GANT DE BOXE</SectionTitle>
          <Container>
            <Card bgImage={productImage1} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Venum Noir</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage2} data-aos="fade-up" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Venum Rouge</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage3} data-aos="fade-left" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Venum Gold</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage4} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Venum Blanc</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
          </Container>
        </Section>
        <Section>
          <SectionTitle data-aos="fade-up">GANT MMA</SectionTitle>
          <Container>
            <Card bgImage={productImage5} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Ares Noir</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage6} data-aos="fade-up" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Leon Black Gold</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage7} data-aos="fade-left" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant UFC Noir</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage8} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Gant Ares Noir</Title>
                <Price>80€</Price>
              </CardContent>
            </Card>
          </Container>
        </Section>
        <Section>
          <SectionTitle data-aos="fade-up">CHAUSSURE TECHNIQUE</SectionTitle>
          <Container>
            <Card bgImage={productImage9} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Chaussure Lutte Black</Title>
                <Price>99€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage10} data-aos="fade-up" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Chaussure Boxe White</Title>
                <Price>99€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage11} data-aos="fade-left" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Chaussure Lutte Bleue</Title>
                <Price>90€</Price>
              </CardContent>
            </Card>
            <Card bgImage={productImage12} data-aos="fade-right" onClick={() => handleCardClick(1)}>
              <CardContent>
                <Title>Chaussure Lutte White-Pink</Title>
                <Price>120€</Price>
              </CardContent>
            </Card>
          </Container>
        </Section>
        <ServiceSection />
      </EquipementPage>
      <Footer />
    </>
  );
};

export default Equipement;