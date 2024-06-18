import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

const ProductsPage = styled.div`
  padding-top: 100px; // Ajustez selon la hauteur de votre Navbar
  text-align: center;
`;

const Protection = () => {
  return (
    <>
      <Navbar />
      <ProductsPage>
        <h1>Produits de Protection</h1>
        <p>Découvrez notre gamme de produits de protection dédiés à votre sécurité et confort.</p>
      </ProductsPage>
    </>
  );
};

export default Protection;