import React from 'react';
import Navbar from '../components/Navbar'; 
import styled from 'styled-components';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

const CoachingPage = styled.div`
  padding-top: 100px; // Ajustez selon la hauteur de votre Navbar
  text-align: center;
`;

const SeanceCoaching = () => {
  return (
    <>
      <Navbar />
      <CoachingPage>
        <h1>Séances de Coaching</h1>
        <p>Participez à nos séances de coaching personnalisées pour atteindre vos objectifs fitness plus rapidement.</p><br /><br /><br /><br />
      </CoachingPage>
      <ServiceSection /><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default SeanceCoaching;