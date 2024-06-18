import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

const ClothingPage = styled.div`
  padding-top: 100px; // Ajustez selon la hauteur de votre Navbar
  text-align: center;
`;

const Vetements = () => {
  return (
    <>
      <Navbar />
      <ClothingPage>
        <h1>Vêtements de Sport</h1>
        <p>Découvrez notre gamme de vêtements de sport adaptés à toutes vos activités physiques.</p>
      </ClothingPage>
    </>
  );
};

export default Vetements;