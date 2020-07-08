import React from 'react'
import Product from '../components/Product'
import '../App'
import skintip from '../skintip.png'
import styled from 'styled-components'
import Search from '../components/Search'









class Main extends React.Component {

    state = {
        products: [],
        search: ''
    }

    getProducts = () => {
        this.setState({
            products: this.props.products
        })
    }

    componentDidMount(){
        this.getProducts()
    }


  searchProducts = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterSearchedProducts = (e) => {
    const products = this.props.products
    console.log(this.state.search)
    const filtered = products.filter(product => product.name.includes(this.state.search))
    return filtered
  }

    render() {
        console.log(this.props.filtered)
        if (this.props.filtered !== undefined || null) { return(
        this.props.filtered.map(product => <Product key={product.id} {...product}/>)) } else {
        return(
            <div>
                <Search
                    products={this.state.products}
                    onChange={this.searchProducts}
                    filter={this.filterSearchedProducts}
                />
                    <br />
                    <img src={skintip} alt='stay hydrated'/>
                    <br />
                    <br />
                    {this.props.products.map(product => 
                    <Product 
                        addLike={this.props.addLike}
                        key={product.id} {...product}/>)}
                    
            </div>
    
        )
                }
    }
}
export default Main