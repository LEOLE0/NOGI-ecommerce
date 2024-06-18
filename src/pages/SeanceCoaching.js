import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

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
        <p>Participez à nos séances de coaching personnalisées pour atteindre vos objectifs fitness plus rapidement.</p>
      </CoachingPage>
    </>
  );
};

export default SeanceCoaching;