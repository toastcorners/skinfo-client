import React, { Component }from 'react';
import './Home.css';
import Main from './containers/Main';
import Filters from './containers/Filters';
import styled from 'styled-components'
import logo from '../src/images/app-logo.png'
import Search from './components/Search';

const OPTIONS = ["Fine Lines and Wrinkles", "Dryness", "Loss of Firmness", "Uneven Texture", "Dark Spots", "Blemishes", "Anti-aging", "Enlarged Pores"]
// const PRODUCTS = ["Cleanser", "Toner", "Moisturizer", "Mask", "Peel", "Serum"]

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 980px;
  height: 72px;
  padding: 16px 0px 2px;
`

const Logo = styled.div`
  /* display: flex; */
 justify-content: center; 
  /* position: absolute;  */
  display: block;
  transform: translateY(0%);
  transform: translateX(180%);
`

const Homediv = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-width: 0px;
`
const Filterdiv = styled.div`
    justify-content: center;
    width: 20%;
    background-color: lightgray;
    & img {
      cursor: pointer;
    }
    
`
const Maindiv = styled.div`
   flex: 1;
`

class Home extends Component {

  state = {
    products: [],
    filtered: [],
    search: ''
    }

  componentDidMount(){
    this.fetchProducts()
  }

  fetchProducts = () => {
    fetch('http://localhost:3000/api/v1/products')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        products: data,
        filtered: data
      })
    })
  }

filterConcerns = (e) => {
  const clicked = parseInt(e.target.className)
    const products = this.state.products
    const matchingProducts = products.filter(product => product.benefits.includes(OPTIONS[clicked]))
    console.log(matchingProducts)
    this.setState({
      filtered: matchingProducts
    })
  return matchingProducts
  }

  addLike = (likes, id) => {
    fetch(`http://localhost:3000/api/v1/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(this.fetchProducts)
}

addComment = (name, details, id) => {
  fetch(`http://localhost:3000/api/v1/products/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      details: details,
      id: id
    })
  })
  .then(this.fetchProducts)
}

searchProducts = (e) => {
  this.setState({...this.state,
    search: e.target.value
  })
}



 
  render () {
    
     const filterSearchedProducts = (e) => {
      const products = this.state.products
      console.log(this.state.search)
      const filtered = products.filter(product => product.name.toLowerCase().includes(this.state.search) || product.brand.toLowerCase().includes(this.state.search))
      this.setState({
        ...this.state, filtered: filtered
      })
    }
      return (
        <div>
          <LogoDiv>
        <Logo>
        <img src={logo} alt='logo'></img>
        </Logo>
           <Search 
              filter={filterSearchedProducts}
              searchProducts={this.searchProducts}
              KeyWord={this.state.search}           
          />
        </LogoDiv>
          <Homediv className='home-container'>
            <Filterdiv>
              <Filters 
              filter={this.filterConcerns}
              />
              </Filterdiv>
            <Maindiv>
              <Main 
              filtered={this.state.filtered}
              // products={this.state.products}
              addLike={this.addLike}
              addComment={this.addComment}
              />
              </Maindiv>
            </Homediv>
            </div>
          
      )
    }
  }
export default Home