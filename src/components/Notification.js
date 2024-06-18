import React from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: absolute;
  width: 55%;
  text-align: center;
  top: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  background: rgba(11,15,38,1); // Couleur de fond pour le succès
  color: white; // Couleur du texte
  padding: 19px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 13px rgba(0,0,0,0.5);
  z-index: 1000; // Assurez-vous qu'il est au-dessus de tout autre contenu
`;

const Message = styled.span`
  flex-grow: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

function Notification({ message, onClose }) {
  return (
    <NotificationContainer>
      <Message>{message}</Message>
      <CloseButton onClick={onClose}>X</CloseButton>
    </NotificationContainer>
  );
}

export default Notification;