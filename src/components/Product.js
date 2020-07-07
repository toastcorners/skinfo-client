import React, { Component } from 'react'
import '../App.css';
import ProductClick from './ProductClick'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

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
        // let history = useHistory()
        const { id, brand, name, img_url, likes} = this.props
        return (
           
            <Router>
                <div className='product-div'>
                    <div className='image-wrapper'>
                        <img className="product-shot-img" src={img_url} alt={this.props.name}/>
                        </div>
                    <div className='info-div'>
                        <h3>{brand}</h3>
                        <p><Link to={`/products/${id}`}>{name}</Link></p>
                        {/* <button onClick={() => history.push(`/products/${id}`)}>view</button> */}
                        <span>{likes} likes | {this.state.isLiked === false ? <button onClick={this.handleLike}> &hearts; like </button> : 
                        <button onClick={this.handleLike}> &hearts; liked </button>}
                        </span>
                    </div> 
                    <Route path={`/products/${id}`} components={ProductClick}/>
                </div>
            </Router>
        )
    }
}
export default Product