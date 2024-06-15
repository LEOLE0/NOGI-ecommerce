import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle'; 
import Accueil from './pages/Accueil';
import InscriptionConnexion from './pages/InscriptionConnexion';
import Profil from './pages/Profil';
import InformationsPersonnelles from './pages/InformationsPersonnelles';
import Protection from './pages/Protection';
import Equipement from './pages/Equipement';
import Vetements from './pages/Vetements';
import SeanceCoaching from './pages/SeanceCoaching';
import Contact from './pages/Contact';
import Panier from './pages/Panier';
import PanierVide from './pages/PanierVide';
// Importation des composants pour la sidebar et le menu burger si nécessaire
// import Sidebar from './components/Sidebar';
// import BurgerMenu from './components/BurgerMenu';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* Ici tu peux placer tes composants Sidebar et BurgerMenu si nécessaire */}
        <Routes>
          <Route path="/" element={<Accueil />} exact />
          <Route path="/inscription-connexion" element={<InscriptionConnexion />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/informations-personnelles" element={<InformationsPersonnelles />} />
          <Route path="/protection" element={<Protection />} />
          <Route path="/equipement" element={<Equipement />} />
          <Route path="/vetements" element={<Vetements />} />
          <Route path="/seance-coaching" element={<SeanceCoaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/panier-vide" element={<PanierVide />} />
        </Routes>
      </div>
    </>
  );
}

export default App;