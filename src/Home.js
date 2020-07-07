import React, { Component }from 'react';
import './Home.css';
import Main from './containers/Main';
import Filters from './containers/Filters';
import Checkbox from 'react-simple-checkbox'

const OPTIONS = ["Fine Lines and Wrinkles", "Dryness", "Blemishes", "Enlarged Pores", "Dark Spots", "Uneven Texture", "Anti-aging", "Loss of Firmness"]
// const PRODUCTS = ["Cleanser", "Toner", "Moisturizer", "Mask", "Peel", "Serum"]

class Home extends Component {

  state = {
    products: [],
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
      ...options, 
      [option]:false
          }),
        {}
      ),
      // productboxes: PRODUCTS.reduce(
      //   (products, product) => ({
      //   ...products, 
      //   [product]:false
      //       }),
      //     {}
      //   ),
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

createCheckbox = (option) => (
    <Filters
        label={option}
        isSelected={this.state.checkboxes[option]}
        onSelectionChange={this.handleCheckboxChange}
        key={option}
        />
)

// createProductCheckbox = (product) => (
//   <Filters
//       label={product}
//       isSelected={this.state.productboxes[product]}
//       onSelectionChange={this.handleProductboxChange}
//       key={product}
//       />
// )
createCheckboxes = () => OPTIONS.map(this.createCheckbox)
// createProductboxes = () => PRODUCTS.map(this.createProductCheckbox)

handleCheckboxChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
        checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
        }
    }))
}

// handleProductboxChange = (e) => {
//   const { name } = e.target
//   this.setState(prevState => ({
//       productboxes: {
//           ...prevState.productboxes,
//           [name]: !prevState.productboxes[name]
//       }
//   }))
// }



handleCheckboxFilter= (e) => {
    e.preventDefault()
    Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
}

// handleProductboxFilter= (e) => {
//   e.preventDefault()
//   Object.keys(this.state.productboxes)
//   .filter(checkbox => this.state.productboxes[checkbox])
// }



filterConcerns = () => {
    const checkedConcerns = Object.keys(this.state.checkboxes)
    .filter(checkbox => this.state.checkboxes[checkbox])
    const products = this.state.products
    const matchingProducts = products.filter(prod => prod.benefits.includes(checkedConcerns[0]))
    return matchingProducts
  }

 
  render () {
      return (
        <div className='app-container'>
          <div className='filter-div'>
            <div className='filter-box'>
                  <h3>Filter By Skin Concern</h3>
                  <form>
                    {this.createCheckboxes()}
                  </form>

            </div>
          </div>
            <div className='main-div'>
            <Main 
              products={this.state.products}/>
            </div>
      </div>
      )
    }
  }
export default Home