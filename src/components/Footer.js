import React from "react";
import styled from "styled-components";

// Création du conteneur du footer avec un background spécifique
const FooterContainer = styled.footer`
  background: rgba(11, 15, 38, 1);
  color: #ffffff; 
  text-align: center;
  padding: 80px; 
  font-family: 'Inter', sans-serif; 
  font-size: 20px; 
`;

function Footer() {
  return (
    <FooterContainer>
      © Tous droits réservés NOGI 2024
    </FooterContainer>
  );
}

export default Footer;