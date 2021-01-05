import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Signup from './pages/Sign-up/Sign-up';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
