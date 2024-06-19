import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  --width: 100px;
  --height: 35px;
  
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #222;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Inter, sans serif";
  transition: background 0.3s;

  &::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: #555;
    font-size: 0.9rem;
    color: #fff;
    border-radius: .25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
  }

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #555;
    left: calc(50% - 10px);
    bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
  }

  &::after, &::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  &:hover {
    background: #222;
  }

  &:hover .text {
    top: -100%;
  }

  &:hover .icon {
    top: 0;
  }

  &:hover:before, &:hover:after {
    opacity: 1;
    visibility: visible;
  }

  &:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }

  &:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  transition: top 0.5s;
  top: 0;
`;

const Icon = styled.span`
  color: #fff;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.5s;
  top: 100%;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ButtonPayer = ({ onClick }) => {
  return (
    <ButtonWrapper data-tooltip="Price: 80€" onClick={onClick}>
      <div className="button-wrapper">
        <Text className="text">Payer</Text>
        <Icon className="icon">
          <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
          </svg>
        </Icon>
      </div>
    </ButtonWrapper>
  );
};

export default ButtonPayer;