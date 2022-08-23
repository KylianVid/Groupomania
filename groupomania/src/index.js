import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/styles/GlobalStyles'
import { ThemeProvider, SurveyProvider } from './utils/context'
import Connexion from './pages/connexion';
import Header from './components/Header';
import Accueil from './pages/accueil';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle/>
        <Routes>
          <Route exact path='/' element={ < Connexion />}/>
          <Route exact path='/acceuil' element= { < Accueil />}/>
        </Routes>
        <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

