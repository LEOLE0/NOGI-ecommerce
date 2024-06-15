import React from "react";
import styled from "styled-components";

// Définition du composant StyledButton utilisant styled-components
const ButtonContainer = styled.button`
  background: transparent;
  border: none;
  padding: 22px;
  display: inline-block;
  font-size: 25px;
  font-weight: 900;
  width: 450px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
  position: relative;
  
  color: #fffd;

  &:hover {
    color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    background: #0a93c4;
    opacity: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover::before {
    right: 0;
    opacity: 1;
  }
`;

const ButtonContent = styled.span`
  display: inline-block;
  transform: skew(21deg);
`;

// Composant React pour le bouton
function StyledButton({ children }) {
  return (
    <ButtonContainer>
      <ButtonContent>{children}</ButtonContent>
    </ButtonContainer>
  );
}

export default StyledButton;
