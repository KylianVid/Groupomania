import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/styles/GlobalStyles'
import { ThemeProvider, SurveyProvider } from './utils/context'
import Auth from './pages/Auth';
import Home from './pages/Home';
import NewPost from './pages/newPost';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
        <GlobalStyle/>
        <Routes>
          <Route exact path='/' element={ < Auth />}/>
          <Route exact path='/Home' element= { < Home />}/>
          <Route exact path='/Home/newPost' element={ < NewPost/> }/>
        </Routes>
        <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

