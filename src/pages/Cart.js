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

const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  font-size: 2rem;
  color: #555;
`;

const CartIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;

  svg {
    width: 50px;
    height: 50px;
    color: #555;
  }
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
          <EmptyCartMessage>
            <CartIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle r="1" cy="21" cx="9"></circle>
                <circle r="1" cy="21" cx="20"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </CartIcon>
            <p>Votre panier est vide</p>
          </EmptyCartMessage>
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