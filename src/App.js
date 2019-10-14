import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { from } from 'rxjs';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
  </div>
  
);

export default App;
