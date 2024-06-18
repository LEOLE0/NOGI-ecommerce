import React from "react";
import styled from "styled-components";

// Définition du composant StyledButton utilisant styled-components avec props
const ButtonContainer = styled.button`
  background: ${props => props.bgColor || 'transparent'};
  border: ${props => props.border || 'none'};
  padding: ${props => props.padding || '22px'};
  display: inline-block;
  font-size: ${props => props.fontSize || '25px'};
  font-weight: ${props => props.fontWeight || '900'};
  width: ${props => props.width || '450px'};
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
  position: relative;
  color: ${props => props.textColor || '#fffd'};

  &:hover {
    color: ${props => props.hoverTextColor || '#fff'};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    background: ${props => props.beforeBgColor || '#0a93c4'};
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

// Composant React pour le bouton avec props passés au ButtonContainer
function StyledButton({ children, bgColor, border, padding, fontSize, fontWeight, width, textColor, hoverTextColor, beforeBgColor }) {
  return (
    <ButtonContainer
      bgColor={bgColor}
      border={border}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      textColor={textColor}
      hoverTextColor={hoverTextColor}
      beforeBgColor={beforeBgColor}
    >
      <ButtonContent>{children}</ButtonContent>
    </ButtonContainer>
  );
}

export default StyledButton;