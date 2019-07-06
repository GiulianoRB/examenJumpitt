import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Section from './components/layout/Section';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row wrapper">
          <div className="col-md-2 barraNavegacion">
            <Navbar iconos={["fas fa-pencil-alt", "far fa-envelope", "far fa-file", "fas fa-cubes",
            "fas fa-table", "fas fa-user", "fas fa-exclamation-circle"]} />
          </div>
          <div className="col-md-10 interior">
            <Header />
            <div className="row">
              <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={Section}/>                
              </Switch>
              </div>
            </div>
            <Footer />
          </div>          
        </div>
      </div>        
    </Router>
  );
}

export default App;
