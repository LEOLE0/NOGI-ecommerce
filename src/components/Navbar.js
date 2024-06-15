import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MyIconComponent from './MyIconComponent';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  position: ;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(11,15,38,0.99);
  
  display: flex;
  z-index: 10;
 
`;

const Logo = styled.img`
  height: 90px;
  
  
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const RightSection = styled(Section)`
  justify-content: flex-end;
  padding-right: 10px;  // Ajoute un peu d'espace pour éviter que l'icône ne touche le bord
  
`;

const Navbar = () => {
  return (
    <Nav>
      <Section />  {/* Section vide pour équilibrer le logo au centre */}
      <Section>
        <Logo src={logo} alt="NOGI Logo" />
      </Section>
      <RightSection>
        <Link to="/inscription-connexion">  {/* Lien vers la page d'inscription/connexion */}
          <MyIconComponent />
        </Link>
      </RightSection>
    </Nav>
  );
}

export default Navbar;