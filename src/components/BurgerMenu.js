import React from 'react';
import styled from 'styled-components';

// Styled components for the burger menu
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const Toggle = styled.label`
  position: fixed; 
  left: ${({ isOpen }) => isOpen ? '260px' : '10px'}; 
  top: 25px; // position
  width: 70px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
`;

const Bar = styled.div`
  width: 60%;
  height: 4px;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;

  &:nth-child(2) {
    transition-duration: .8s;
  }

  ${Checkbox}:checked + ${Toggle} & {
    position: absolute;
    transition-duration: .5s;
  }

  ${Checkbox}:checked + ${Toggle} &:nth-child(1) {
    width: 100%;
    transform: rotate(45deg);
  }

  ${Checkbox}:checked + ${Toggle} &:nth-child(2) {
    transform: scaleX(0);
  }

  ${Checkbox}:checked + ${Toggle} &:nth-child(3) {
    width: 100%;
    transform: rotate(-45deg);
  }
`;

const MenuBurger = ({ isOpen, toggle }) => {
  return (
    <>
      <Checkbox id="checkbox2" />
      <Toggle className="toggle toggle2" htmlFor="checkbox2" onClick={toggle} isOpen={isOpen}>
        <Bar id="bar4" className="bars"></Bar>
        <Bar id="bar5" className="bars"></Bar>
        <Bar id="bar6" className="bars"></Bar>
      </Toggle>
    </>
  );
};

export default MenuBurger;