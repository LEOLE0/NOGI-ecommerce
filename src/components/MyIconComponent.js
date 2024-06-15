import React from 'react';
import styled from 'styled-components';

// Création du composant stylé pour l'icône
const StyledIcon = styled.span`
  &.material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 300,
      'GRAD' 0,
      'opsz' 20;
  }
  &:hover {
    color: #0a93c4;
  }
    padding: 1em;
   font-size: 30px; // Ajuste la taille de l'icône selon tes besoins
  color: #FFFF; // Couleur de l'icône
`;

function MyIconComponent() {
    return (
        <StyledIcon className="material-symbols-outlined">
            account_circle
        </StyledIcon>
    );
}

export default MyIconComponent;