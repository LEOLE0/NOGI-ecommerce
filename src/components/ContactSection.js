import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm'; // Assure-toi que le chemin est correct
import 'aos/dist/aos.css'; 
// import AOS from 'aos';

// Initialisation de AOS
// AOS.init();

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: white;
  padding: 230px 50px;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 2rem;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 4.5rem;
`;

function ContactSection() {
  return (
    <Section>
      <LeftColumn data-aos="fade-right" data-aos-delay="50">
        <Title>Une requête? Faites-nous savoir !</Title>
      </LeftColumn>
      <RightColumn data-aos="fade-left" data-aos-delay="150">
        <ContactForm />
      </RightColumn>
    </Section>
  );
}

export default ContactSection;