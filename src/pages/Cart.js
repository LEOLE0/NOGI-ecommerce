import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ServiceSection from '../components/ServiceSection';

const CartContainer = styled.div`
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff5252;
  }
`;

const TotalContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background: #169ecf;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/paiement');
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        <h2>Votre Panier</h2>
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <CartItem key={index}>
                <ItemDetails>
                  <ItemName>{product.name}</ItemName>
                  <ItemPrice>{product.price}€</ItemPrice>
                </ItemDetails>
                <RemoveButton onClick={() => removeFromCart(product.id)}>Supprimer</RemoveButton>
              </CartItem>
            ))}
            <TotalContainer>
              <h3>Total: {total}€</h3>
              <CheckoutButton onClick={handleCheckout}>
                Passer la commande
              </CheckoutButton>
            </TotalContainer>
          </>
        )}
      </CartContainer>
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Cart;