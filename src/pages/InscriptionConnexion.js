import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Inscription from "../components/Inscription";
import Connexion from "../components/Connexion";
import styled from "styled-components";

const Tab = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: none;
  outline: none;
  font-size: 28px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: rgba(11, 15, 38);
  border-bottom: ${(props) => (props.active ? "4px solid darkblue" : "none")};

  &:hover {
    opacity: 1;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

const TabContent = styled.div`
  padding: 20px;
`;

function InscriptionConnexion() {
  const [activeTab, setActiveTab] = useState("inscription");

  return (
    <div>
      <Navbar />
      <Tabs>
        <Tab onClick={() => setActiveTab("inscription")} active={activeTab === "inscription"}>Inscription</Tab>
        <Tab onClick={() => setActiveTab("connexion")} active={activeTab === "connexion"}>Connexion</Tab>
      </Tabs>
      <TabContent>
        {activeTab === "inscription" ? <Inscription onSwitchTab={setActiveTab} /> : <Connexion />}
      </TabContent>
      <Footer />
    </div>
  );
}

export default InscriptionConnexion;