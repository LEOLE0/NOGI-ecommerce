import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import StyledButton from '../components/StyledButton';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/userActions';

const Form = styled.form`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
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
  align-self: flex-start;
  &:after {
    content: " *";
    color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const HalfInputDiv = styled.div`
  flex: 1;
`;

function Inscription() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: `${formData.firstName} ${formData.lastName}`
        });
        dispatch(setUser({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        }));
        navigate('/home'); // Redirige vers HomePage après une inscription réussie
      } catch (error) {
        console.error("Erreur d'inscription:", error);
        alert("Erreur lors de l'inscription: " + error.message);
      }
    };
  
  
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <HalfInputDiv>
            <Label htmlFor="firstName">Prénom</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </HalfInputDiv>
          <HalfInputDiv>
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </HalfInputDiv>
        </Row>
        <Label htmlFor="phone">Numéro de téléphone</Label>
        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />

        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />

        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required />

        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
        <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required />


        <ButtonContainer>
          <StyledButton 
            bgColor="transparent" 
            textColor="rgba(11,15,38,1)" 
            beforeBgColor="rgba(11,15,38,1)"
            padding="17px 5rem"
            fontSize="13px"
            width="50%"
            type="submit">Inscription</StyledButton>
          <Link to="/" style={{ width: "50%", textDecoration: 'none' }}>
            <StyledButton 
              bgColor="transparent" 
              textColor="rgba(11,15,38,1)" 
              beforeBgColor="rgba(11,15,38,1)"
              padding="17px 5rem"
              fontSize="13px"
              width="100%"
              type="button">Annuler</StyledButton>
          </Link>
        </ButtonContainer>
    </Form>
  );
}

export default Inscription;