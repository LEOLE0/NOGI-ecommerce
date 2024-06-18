import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

const EmptyCartPage = styled.div`
  padding-top: 100px; // Ajustez en fonction de la hauteur de votre Navbar
  text-align: center;
`;

const PanierVide = () => {
  return (
    <>
      <Navbar />
      <EmptyCartPage>
        <h1>Votre panier est vide</h1>
        <p>Ajoutez des produits pour commencer votre shopping !</p>
      </EmptyCartPage>
    </>
  );
};

export default PanierVide;