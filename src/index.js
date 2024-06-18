import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe les styles nécessaires
import App from './App';
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Initialiser AOS lors du démarrage de l'application
AOS.init({
  duration: 1200, // chaque animation durera 1200 ms
  once: false, // chaque animation se déclenchera à chaque scroll
  delay: 100, // délai avant le début de chaque animation
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);