import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm'; 

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

const PageTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
`;

const SeanceCoaching = () => {
  return (
    <>
      <Navbar />
      <Section>
        <div>
          <PageTitle>Séances de Coaching</PageTitle>
          <LeftColumn data-aos="fade-right" data-aos-delay="50">
            <Title>Réservez votre séance de coaching</Title>
          </LeftColumn>
          <RightColumn data-aos="fade-left" data-aos-delay="150">
            <BookingForm />
          </RightColumn>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default SeanceCoaching;