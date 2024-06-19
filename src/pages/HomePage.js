import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerImage from '../assets/banner.jpg';
import productImage1 from '../assets/equipement.png';
import productImage2 from '../assets/protection.png';
import productImage3 from '../assets/vetement.png';
import serviceImage1 from '../assets/junior.png';
import serviceImage2 from '../assets/senior.png';
import serviceImage3 from '../assets/expert.png';
import ServiceSection from '../components/ServiceSection';

AOS.init();

const Banner = styled.div`
  width: 100%;
  height: 990px;
  background: url(${bannerImage}) center/cover no-repeat;
  margin-top: 20px;
`;

const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: rgba(11, 15, 38, 1)
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
  height: 300px;
  background: url(${props => props.bgImage}) center/cover no-repeat;
  position: relative;
  color: white;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
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

  h3 {
    position: relative;
    z-index: 1;
    font-size: 1.5rem;
  }
`;

const HomePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div style={{ fontFamily: 'roboto, sans serif', textAlign: 'center', marginTop: '100px' }}>
        <h1>Bienvenue, {user.displayName}!</h1>
      </div>
      <Banner />
      <Section>
        <SectionTitle data-aos="fade-up">Tous nos produits</SectionTitle>
        <Container>
          <Card bgImage={productImage1} data-aos="fade-right" onClick={() => handleCardClick('/equipement')}>
            <h3>Equipement</h3>
          </Card>
          <Card bgImage={productImage2} data-aos="fade-up" onClick={() => handleCardClick('/protection')}>
            <h3>Protection</h3>
          </Card>
          <Card bgImage={productImage3} data-aos="fade-left" onClick={() => handleCardClick('/vetements')}>
            <h3>Vetement</h3>
          </Card>
        </Container>
      </Section>
      <Section>
        <SectionTitle data-aos="fade-up">Nos Coaching</SectionTitle>
        <Container>
          <Card bgImage={serviceImage1} data-aos="fade-right" onClick={() => handleCardClick('/seance-coaching')}>
            <h3>Junior</h3>
          </Card>
          <Card bgImage={serviceImage2} data-aos="fade-up" onClick={() => handleCardClick('/seance-coaching')}>
            <h3>Senior</h3>
          </Card>
          <Card bgImage={serviceImage3} data-aos="fade-left" onClick={() => handleCardClick('/seance-coaching')}>
            <h3>Expert</h3>
          </Card>
        </Container>
      </Section>
      <ServiceSection />
      <Footer />
    </>
  );
};

export default HomePage;