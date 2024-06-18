import React from "react";
import styled from "styled-components";
import livraisonImage from "../assets/livraison.png";
import scalaImage from "../assets/scala.png";
import paiementSecuriseImage from "../assets/securepay.png";
import serviceClientImage from "../assets/customserv.png";

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 0px 30px 90px 30px;
  font-family: 'Inter', sans-serif;
`;

const ServiceBlock = styled.div`
  flex: 1;
  text-align: center;
  transition: transform 0.1s ease-in-out;
`;

const Icon = styled.img`
  width: auto;  // Tu maintiens la largeur
  height: 45px; // Hauteur fixe pour toutes les images
  object-fit: cover; // S'assure que l'image couvre bien la zone sans déformer
  margin-bottom: 40px;
`;

const Title = styled.h3`
  
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 23px;
  font-weight: 100;
  color: rgba(11, 15, 38, 1);
  
`;



function ServicesSection() {
  return (
    <ServicesContainer>
      <ServiceBlock data-aos="zoom-in-up" data-aos-delay="50">
        <Icon src={livraisonImage} alt="Livraison gratuite" />
        <Title>Livraison gratuite à partir de 49,99€</Title>
        <Description>Service disponible pour la France métropolitaine, la Suisse et la Belgique</Description>
      </ServiceBlock>
      <ServiceBlock data-aos="zoom-in-up" data-aos-delay="100">
        <Icon src={scalaImage} alt="Paiement échelonné" />
        <Title>Paiement jusqu'à 3x sans frais</Title>
        <Description>Payez vos achats en 3 mensualités, sans aucun intérêts ni frais supplémentaires. Votre commande est expédiée immédiatement.</Description>
      </ServiceBlock>
      <ServiceBlock data-aos="zoom-in-up" data-aos-delay="150">
        <Icon src={paiementSecuriseImage} alt="Paiement sécurisé" />
        <Title>Paiement sécurisé</Title>
        <Description>Tous les paiements sont effectués via un serveur sécurisé. Aucune informations bancaire n’est conservée et personne n’a accès à ces données.</Description>
      </ServiceBlock>
      <ServiceBlock data-aos="zoom-in-up" data-aos-delay="200">
        <Icon src={serviceClientImage} alt="Service client" />
        <Title>Service Clients</Title>
        <Description>Une question ? Un problème ? Nous sommes à votre écoute et mettons à votre disposition plusieurs moyens de nous contacter. Vous pouvez également nous écrire à <strong>support@nogi.fr</strong></Description>
      </ServiceBlock>
    </ServicesContainer>
  );
}

export default ServicesSection;