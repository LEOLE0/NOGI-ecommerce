import React from "react";
import styled from "styled-components";
import videoSource from "../assets/video.mp4";

// const VideoContainer = styled.div`

//   width: 100%;
//   height: 100%; // ou une valeur fixe selon tes besoins
//   overflow: hidden;
// `;

const Video = styled.video`
  width: 100%;
  height: 100%; // Ajuste pour couvrir la zone souhaitée
`;

function VideoBanner() {
  return (
    <Video autoPlay loop muted>
      <source src={videoSource} type="video/mp4" />
      Votre navigateur ne prend pas en charge la vidéo.
    </Video>
  );
}

export default VideoBanner;
