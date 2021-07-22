import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import PlantInventory from './components/PlantInventory';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Apps from './components/Apps';
import Contact from './components/Contact';
import Error from './components/Error';


import PlantsByZip from './components/PlantByZip';
import './index'
const App = () => {


  return (      
    <BrowserRouter>
     <div>
      <Navigation />
  
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/apps" component={Apps}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/plantInventory" component={PlantInventory}/>
          <Route path="/plantByZip" component={PlantsByZip}/>
          <Route component={Error}/>
        </Switch>
      
     </div> 
   </BrowserRouter>
 );
  
};

export default App;
