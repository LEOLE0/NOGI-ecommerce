import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import Navbar from '../components/Navbar';
import VideoBanner from '../components/VideoBanner';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

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
        <ContactSection />
        <ServiceSection />
        <Footer />
      </div>
    </>
  );
}

export default Accueil;