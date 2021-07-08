import React from 'react';
import './App.css'
import { Frontpage } from "./components/frontpage/frontpage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Menu } from "./components/menu/menu";
import Contact from './components/contact/contact';
import Order from './components/order/order';
import About from './components/about/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Frontpage} />

      </Switch>
    </Router>
  );
}

export default App;
