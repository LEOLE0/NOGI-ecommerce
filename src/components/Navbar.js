import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MyIconComponent from './MyIconComponent';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';
import MenuBurger from './BurgerMenu';
import Sidebar from './Sidebar';
import Icones from './Icones'; 

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(11, 15, 38, 1);
  display: flex;
  align-items: center;
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

const LeftSection = styled(Section)`
  justify-content: flex-start;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};  // Gère la visibilité sans retirer l'espace
`;

const RightSection = styled(Section)`
  justify-content: flex-end;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { user } = useContext(UserContext);

  return (
    <Nav>
      <LeftSection isVisible={user}>
        <MenuBurger toggle={toggle} isOpen={isOpen} />
      </LeftSection>
      <Section>
        <Logo src={logo} alt="NOGI Logo" />
      </Section>
      <RightSection>
        {user ? (
          <Icones />
        ) : (
          <Link to="/inscription-connexion">
            <MyIconComponent />
          </Link>
        )}
      </RightSection>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </Nav>
  );
};

export default Navbar;