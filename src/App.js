import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Home from './Home';
import LandingPage from './LandingPage'
import ProductClick from './components/ProductClick';
import Ingredient from './components/Ingredient';



function App () {
 
  return (
  <Router>
        <div className='app-container'>
        </div>
        <Switch>
          <Route exact path="/key_ingredients/:id" component={withRouter(Ingredient)}/>
          <Route path="/products/:id" component={ProductClick}/>
          <Route path="/products" component={Home}/>
          <Route path="/" component={LandingPage}/>
          
        </Switch>
  </Router>
      )

  }
export default App 
