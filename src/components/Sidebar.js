import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  top: 0;
  width: 250px;
  height: 100vh;
  background: rgba(11, 15, 38, 1);
  transition: 0.3s ease-in-out;
  padding: 50px 50px 50px 50px;
  z-index: 20;
`;

const SidebarLink = styled(Link)`
font-family: 'Inter', sans-serif; 
font-size: 20px;
  padding: 20px 7px 23px 29px;
  color: white;
  display: block;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLink to="/home" onClick={toggle}>Accueil</SidebarLink>
      <SidebarLink to="/home" onClick={toggle}>Nos produits</SidebarLink>
      <SidebarLink to="/seance-coaching" onClick={toggle}>Coaching</SidebarLink>
      <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;