import React from 'react'
import Product from '../components/Product'
import Search from '../components/Search'
import '../App'

class Main extends React.Component {

    state = {
        products: [],
        search: []
    }

    getProducts = () => {
        this.setState({
            products: this.props.products,
            search: ''

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
        const filteredProds = products.filter(prod => prod === this.state.search)
        console.log(filteredProds)
      }


    render() {
        return(
            <div>
                <Search 
                    onChange={this.searchProducts}
                    filter={this.filterSearchedProducts}
                    />
                    {this.props.products.map(product => <Product key={product.id} {...product}/>)}
                    {/* <Product 
                    /> */}
            </div>
        )
    }
}
export default Main