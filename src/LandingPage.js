import React, { Component } from 'react';
import logo from './skinfo-lp.png'
import { Switch, Link, Route} from 'react-router-dom'
import Home from './Home';

class LandingPage extends Component {

    render(){
        return(
            <Switch>
            <div className='lp-logo-box'>
                <Link to='/products'><img src={logo} alt='logo'/></Link>
            </div>
            <Route path="/products" component={Home}/>
            </Switch>
        )
    }
}
export default LandingPage