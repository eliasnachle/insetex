import './App.css';
import NavbarScrolled                             from './components/NavbarScrolled';
import Navbar                                     from './components/Navbar';
import Footer                                     from './components/Footer';
import React                                      from 'react'
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home                                       from './components/pages/home';
import About                                      from './components/pages/about';
import Contact                                    from './components/pages/contact';
import Desinsetizacao                             from './components/pages/desinsetizacao';
import Desratizacao                               from './components/pages/desratizacao';
import Descupinizacao                             from './components/pages/descupinizacao';
import Desentupimento                             from './components/pages/desentupimento';
import Limpeza                                    from './components/pages/limpeza';
import Client                                     from './components/pages/client';

function App() {
  
  const reloadPage = () => {
    window.location.reload();
  };

  return(
    <Router >
      <div className="container">
      <Switch >
        <Route exact path='/servicos/desentupimento'>
          <NavbarScrolled />
          <Desentupimento />
          <Footer/>
        </Route>
        <Route exact path='/sobre-nos'>
          <NavbarScrolled />
          <About />
          <Footer/>
        </Route>
        <Route exact path='/contato'>
          <NavbarScrolled />
          <Contact />
          <Footer/>
        </Route>
        <Route exact path='/servicos/desinsetizacao'>
          <NavbarScrolled />
          <Desinsetizacao />
          <Footer/>
        </Route>
        <Route exact path='/servicos/descupinizacao'>
          <NavbarScrolled />
          <Descupinizacao />
          <Footer/>
        </Route>
        <Route exact path='/servicos/desratizacao'>  
          <NavbarScrolled />
          <Desratizacao />
          <Footer/>
        </Route>
        <Route exact path='/servicos/limpeza-de-caixa-dagua'>
          <NavbarScrolled />
          <Limpeza />
          <Footer/>
        </Route>
        <Route exact path='/area-do-cliente'>
          <NavbarScrolled />
          <Client />
          <Footer/>
        </Route>
        <Route exact path='/'>
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}


export default App;