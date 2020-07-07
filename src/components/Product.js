import React, { Component } from 'react'
import '../App.css';
import ProductClick from './ProductClick'
import Ingredient from './Ingredient'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class Product extends Component {

    state = {
        isLiked: false,
        currentProduct: [],
        products: []
    }

    componentDidMount(){
        this.fetchProducts()
    }

    setCurrentProduct = () => {
        this.setState({
            currentProduct: this.props.id
        })
    }

    addLike = () => {
        fetch(`http://localhost:3000/api/v1/products/${this.props.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            likes: +1
          })
        })
    }

    handleLike = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
        }))
         this.addLike()
         this.fetchProducts()
    }

    fetchIngredient = (id) => {
        fetch(`http://localhost:3000/api/v1/key_ingredients/${id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            ingredient: data
            })
        })
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
    
    render(){
        return (
           
            <Router>
                <div className='product-div'>
                    <div className='image-wrapper'>
                        <img className="product-shot-img" src={this.props.img_url} alt={this.props.name}/>
                        </div>
                    <div className='info-div'>
                        <h3>{this.props.brand}</h3>
                        <p><Link to='/productclick' onClick={()=>this.setCurrentProduct}>{this.props.name}</Link></p>
                        <span>{this.props.likes} likes | {this.state.isLiked === false ? <button onClick={this.handleLike}> &hearts; like </button> : 
                        <button onClick={this.handleLike}> &hearts; liked </button>}
                        </span>
                    </div> 

                <div className='ingredient-div'>
                {/* {this.props.key_ingredients.map(ingredient => <Ingredient key={ingredient.id} {...ingredient}/>)} */}
                </div>
                
                {/* <Ingredient /> */}
                </div>
            </Router>
        )
    }
}
export default Product