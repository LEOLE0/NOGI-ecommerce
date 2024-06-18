import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

// Styles spécifiques pour la page Equipement
const EquipementPage = styled.div`
  padding-top: 100px; // Ajoutez un padding pour ne pas que le contenu soit caché par la Navbar fixe
`;

const Equipement = () => {
  return (
    <>
      <Navbar />
      <EquipementPage>
        <h1>Équipement de Sport</h1>
        <p>Explorez notre large gamme d'équipements sportifs.</p>
        {/* Liste d'équipements et autres éléments de contenu ici */}
      </EquipementPage>
    </>
  );
};

export default Equipement;