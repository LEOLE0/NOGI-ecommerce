import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 48%;
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

const Select = styled.select`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 14px;
  margin-top: 1rem;
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
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  background: #169ecf;
  color: white;
  border: none;
  padding: 16px 2rem;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0e7bbf;
  }
`;

const BookingForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Réservation envoyée!');
    // Logique pour traiter la réservation
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputDiv>
        <Input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </InputDiv>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Select
        value={sessionType}
        onChange={(e) => setSessionType(e.target.value)}
        required
      >
        <option value="" disabled hidden>
          Type de séance
        </option>
        <option value="junior">Junior</option>
        <option value="senior">Senior</option>
        <option value="expert">Expert</option>
      </Select>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <ButtonDiv>
        <StyledButton type="submit">Réserver</StyledButton>
      </ButtonDiv>
    </Form>
  );
};

export default BookingForm;