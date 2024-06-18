import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import StyledButton from './StyledButton';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/userActions';

const Form = styled.form`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  padding: 40px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s;

  &:hover, &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 8px rgba(0,86,179,0.5);
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #333;
  &:after {
    content: " *";
    color: red;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0 50px 0;
`;

function Connexion() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch(setUser({
          firstName: user.displayName.split(' ')[0], // Assumes the displayName is in "FirstName LastName" format
          lastName: user.displayName.split(' ')[1],
          email: user.email
        }));
        navigate('/home'); // Redirige vers HomePage après une connexion réussie
      } catch (error) {
        console.error("Erreur de connexion:", error);
        alert("Erreur lors de la connexion: " + error.message);
      }
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Label htmlFor="password">Mot de passe</Label>
      <Input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <ButtonDiv>
        <StyledButton 
          bgColor="transparent" 
          textColor="rgba(11,15,38,1)" 
          beforeBgColor="rgba(11,15,38,1)"
          padding="20px 70px"
          fontSize="16px"
          width="100%"
          type="submit">Connexion</StyledButton>
      </ButtonDiv>
    </Form>
  );
}

export default Connexion;