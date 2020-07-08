import React, { Component }from 'react';
import './Home.css';
import Main from './containers/Main';
import Filters from './containers/Filters';
import styled from 'styled-components'

const OPTIONS = ["Fine Lines and Wrinkles", "Dryness", "Loss of Firmness", "Uneven Texture", "Dark Spots", "Blemishes", "Anti-aging"]
// const PRODUCTS = ["Cleanser", "Toner", "Moisturizer", "Mask", "Peel", "Serum"]


const Homediv = styled.div`
    display: flex;
    flex-direction: row;
`
const Filterdiv = styled.div`
    justify-content: center;
    width: 30%;
    background-color: lightgray;
    
`
const Maindiv = styled.div`
   flex: 1;
`

class Home extends Component {

  state = {
    products: [],
    filtered: [],
    search: []
    }

  componentDidMount(){
    this.fetchProducts()
  }

  fetchProducts = () => {
    fetch('http://localhost:3000/api/v1/products')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        products: data
      })
    })
  }

filterConcerns = (e) => {
  console.log(e.target.className)
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

 
  render () {
      return (
          <Homediv className='home-container'>
            <Filterdiv>
              <Filters 
              filter={this.filterConcerns}
              />
              </Filterdiv>
            <Maindiv>
              <Main 
              products={this.state.products}
              addLike={this.addLike}
              filtered={this.state.filterConcerns}
              />
              </Maindiv>
            </Homediv>
      )
    }
  }
export default Home