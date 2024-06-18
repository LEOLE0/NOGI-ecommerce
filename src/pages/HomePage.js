import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Bienvenue, {user.displayName}!</h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;