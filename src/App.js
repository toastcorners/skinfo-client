import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Home from './Home';
import LandingPage from './LandingPage'
import ProductClick from './components/ProductClick';
import Ingredient from './components/Ingredient';
// import styled from 'styled-components'


function App () {

  // const Appcontainer = styled.div`
  //   display: flex;
  //   grid-template-columns: 200px 1fr;
  //   grid-gap: 1rem;
  //   grid-template-areas:
  //   "header header"
  //   "sidebar main"
  //   "sidebar main"; 

  return (
  <Router>
        <Switch>
          <Route exact path="/key_ingredients/:id" component={withRouter(Ingredient)}/>
          <Route exact path="/products/:id" component={ProductClick}/>
          <Route exact path="/products" component={Home}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
  </Router>
      )

  }
export default App 
