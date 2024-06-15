import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Navbar from "../components/Navbar";
import VideoBanner from "../components/VideoBanner";
import WelcomeSection from "../components/WelcomeSection";
import AboutSection from "../components/AboutSection";
import NewsSection from "../components/NewsSection";
// Importer d'autres composants si nécessaire

function Accueil() {
  return (
    <>
      <GlobalStyle />
      <div className="Accueil">
        <Navbar />
        <VideoBanner />
        <WelcomeSection />
        <AboutSection />
        <NewsSection />

        {/* Ici, tu peux ajouter d'autres sections ou composants spécifiques à la page d'accueil */}
      </div>
    </>
  );
}

export default Accueil;
