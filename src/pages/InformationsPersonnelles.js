import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar'; 
import styled from 'styled-components';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

const PersonalInfoPage = styled.div`
  padding-top: 100px; // Ajustez en fonction de la hauteur de votre Navbar
`;

const InformationsPersonnelles = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Réinitialise l'état de l'utilisateur
      navigate('/'); // Redirige vers la page d'accueil
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  return (
    <>
      <Navbar />
      <PersonalInfoPage>
        <h1>Informations Personnelles</h1>
        <button onClick={handleLogout}>Déconnexion</button>
      </PersonalInfoPage>
      <ServiceSection />
      <Footer />
    </>
  );
};

export default InformationsPersonnelles;