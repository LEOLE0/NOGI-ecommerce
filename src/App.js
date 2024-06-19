import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import GlobalStyle from './components/GlobalStyle';
import Accueil from './pages/Accueil';
import InscriptionConnexion from './pages/InscriptionConnexion';
import InformationsPersonnelles from './pages/InformationsPersonnelles';
import Protection from './pages/Protection';
import Equipement from './pages/Equipement';
import Vetements from './pages/Vetements';
import SeanceCoaching from './pages/SeanceCoaching';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Paiement from './pages/Paiement';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <GlobalStyle />
        <div className="App">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/inscription-connexion" element={<InscriptionConnexion />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/informations-personnelles" element={<InformationsPersonnelles />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/equipement" element={<Equipement />} />
            <Route path="/vetements" element={<Vetements />} />
            <Route path="/seance-coaching" element={<SeanceCoaching />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />
            <Route path="/paiement" element={<Paiement />} />
          </Routes>
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;