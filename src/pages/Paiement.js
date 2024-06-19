import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ServiceSection from '../components/ServiceSection';

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px); /* Adjust to account for navbar and footer height */
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #169ecf;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    background: #0e7bbf;
  }
`;

const Paiement = () => {
  const { cart } = useCart();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculez le total du panier
    const cartTotal = cart.reduce((sum, product) => sum + parseFloat(product.price.replace('€', '')), 0);
    setTotal(cartTotal);
  }, [cart]);

  const handlePayment = (e) => {
    e.preventDefault();
    // Logique pour traiter le paiement
    alert('Paiement réussi');
  };

  return (
    <>
      <Navbar />
      <PaymentContainer>
        <h2>Paiement</h2>
        <p>Total à payer : {total}€</p>
        <Form onSubmit={handlePayment}>
          <Input
            type="text"
            placeholder="Nom sur la carte"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Numéro de carte"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Date d'expiration (MM/AA)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <Button type="submit">Payer</Button>
        </Form>
      </PaymentContainer>
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Paiement;