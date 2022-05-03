import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// icons from Fontawesome
import {FontAwesome} from 'react-icons/fa'
import { twitter, facebook, linkedin } from 'react-icons/fa';

// Styles
import './App.css';
import './styles/normalize.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Nav.css';
import './styles/components/layout/Footer.css';
import './styles/components/pages/HomePage.css';
import './styles/components/pages/NosotrosPage.css';
import './styles/components/pages/ServiciosPage.css';
import './styles/components/pages/GaleriaPage.css';
import './styles/components/pages/NovedadesPage.css';
import './styles/components/pages/ContactoPage.css';

// Pages
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

// App Output

function App() {
  return (
    <Router>
      <Header/>
        <Nav/>
        <Switch>
          <Route path ="/" exact component = {HomePage} />
          <Route path = '/nosotros' exact component = {NosotrosPage} />
          <Route path = '/servicios' exact component = {ServiciosPage} />
          <Route path = '/galeria' exact component = {GaleriaPage} />
          <Route path = '/novedades' exact component = {NovedadesPage} />
          <Route path = '/contacto' exact component = {ContactoPage} />
        </Switch>
      <Footer/>
      
    </Router>
  );
}

export default App;
