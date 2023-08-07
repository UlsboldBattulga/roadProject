import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage';
import Products from './components/pages/Products';
import Workdone from './components/pages/Workdone';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/activity' component={Products} />
          <Route path='/workdone' component={Workdone} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
