import React from 'react';
import './App.css';
import {Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home';
import ProductClick from './components/ProductClick';
import logo from './skinfo.png'



function App () {
 
  return (
  <Router>
      <img className='logo-div' src={logo} alt='logo'/>
        <div className='app-container'>

        </div>
        <Switch>
          <Route path="/product/:id" component={Product}/>
          <Route path="/products" component={Product}/>
          <Route path="/" component={Home}/>
        </Switch>
  </Router>
      )

      function Product(){
        return (
          <div className='product-div'>
          <div className='image-wrapper'>
              <img className="product-shot-img" src={this.props.img_url} alt={this.props.name}/>
              </div>
          <div className='info-div'>
              <h3>{this.props.brand}</h3>
              {/* <p><Link to='/productclick' onClick={()=>history.push('/product')}>{this.props.name}</Link></p> */}
              <Route exact path='/product/:id' render={(routerprops)=><ProductClick routerProps={routerprops}/>}/>
              <span>{this.props.likes} likes | {this.state.isLiked === false ? <button onClick={this.handleLike}> &hearts; like </button> : 
              <button onClick={this.handleLike}> &hearts; liked </button>}
              </span>
          </div> 
          </div>
        )
      }
  }
export default App 
