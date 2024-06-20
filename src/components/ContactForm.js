import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import styled from "styled-components";
import StyledButton from './StyledButton';
import Notification from './Notification';

const Card = styled.div`
  height: auto;
  background: #169ecf;
  border-radius: 0px 20px;
  width: 70%;
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const InputDiv = styled.div`
  margin-top: 1rem;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 14px;
  outline: none;
  &::placeholder {
    color: black;
    opacity: 0.7;
  }
  &:focus {
    border-color: #0056b3;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const FormTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  text-align: center;
  color: rgba(11, 15, 38, 1);
  margin-bottom: 20px;
`;

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 3 || !validateEmail(email) || !message.trim()) {
      alert('Assurez-vous que tous les champs requis sont correctement remplis.');
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date()
      });

      setShowNotification(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire : ", error);
      alert('Erreur lors de l\'envoi du formulaire.');
    }
  };

  return (
    <Card>
      <FormTitle>Contactez-nous</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputDiv>
          <Input placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <Input placeholder="Sujet" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <Input placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </InputDiv>
        <ButtonDiv>
          <StyledButton 
            bgColor="transparent" 
            textColor="rgba(11,15,38,1)" 
            beforeBgColor="rgba(11,15,38,1)"
            padding="16px 5rem"
            fontSize="13px"
            width="70%"
          >Envoyer</StyledButton>
        </ButtonDiv>
        {showNotification && <Notification message="Merci pour votre message!" onClose={() => setShowNotification(false)} />}
      </form>
    </Card>
  );
}

export default ContactForm;