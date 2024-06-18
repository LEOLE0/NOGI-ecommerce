import React from 'react';
import Navbar from '../components/Navbar'; // Assurez-vous que le chemin d'accès est correct
import styled from 'styled-components';

// Si vous avez des styles spécifiques pour la page, ajoutez-les ici
const ContactPage = styled.div`
  padding-top: 100px; // Ajoutez un padding pour ne pas que le contenu soit caché par la Navbar fixe
`;

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactPage>
        <h1>Contactez-nous</h1>
        <p>Veuillez remplir le formulaire ci-dessous pour nous envoyer un message.</p>
        {/* Formulaires et autres éléments de contenu ici */}
      </ContactPage>
    </>
  );
};

export default Contact;