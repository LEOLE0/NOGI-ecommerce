import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; // Empêche le défilement horizontal
  }
  *, *:before, *:after {
    box-sizing: border-box; // S'assure que padding et border sont inclus dans la largeur/hauteur
  }
`;

export default GlobalStyle;