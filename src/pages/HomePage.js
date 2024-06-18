// src/pages/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const WelcomeMessage = styled.h1`
  color: #0b0f26;
  text-align: center;
  margin-top: 120px;
`;

const HomePage = () => {
  const user = useSelector(state => state.user.user);

  return (
    <div>
      <Navbar />
      {user && (
        <WelcomeMessage>Bienvenue {user.firstName} {user.lastName}</WelcomeMessage>
      )}
      <div>
        <h1>Explorez nos produits et services!</h1>
      </div>
    </div>
  );
};

export default HomePage;