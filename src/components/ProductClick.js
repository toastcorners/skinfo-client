import React from 'react'
import Ingredient from './Ingredient'
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'

class ProductClick extends React.Component{

    state = {
        productinfo: {},
        ingredients: []
    }

    componentDidMount = () => {
        this.fetchProductInfo()
    }

    fetchProductInfo = () => {
        const url = this.props.location.pathname
        fetch(`http://localhost:3000/api/v1${url}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            productinfo: data
            })
        })
    }

    // updateIngredients = () => {
    //     this.setState({
    //         ingredients: ...this.state.productinfo.key_ingredients, 
    //     })
    //     console.log(this.state.ingredients)
    // }

    // fetchIngredientInfo = () => {
    //     const url = this.props.location.pathname
    //     fetch(`http://localhost:3000/api/v1${url}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //       this.setState({
    //         ingredients: data.productinfo.key_ingredients
    //       })
    //     })
    //   }


    render(){
        const { id, brand, name, description, benefits, key_ingredients, img_url} = this.state.productinfo
        console.log(this.props.location.pathname)
        return (
            <Router>
                <div className='product-details'> 
                    <img src={img_url} width='300' height='300' alt={name}/>
                    <br />
                    <span><strong>{brand}</strong></span>
                    <br />
                    <span>{name}</span>
                    <p><strong>Why Do I Need This?</strong> {description}</p>
                    <p><strong>Skin Concerns:</strong> {benefits}</p>
                    <span><strong>Key Ingredients:</strong></span>
                    {key_ingredients && key_ingredients.map(ingredient => {return <div key={ingredient.id}><Link to={`/key_ingredients/${ingredient.id}`}>{ingredient.name}</Link></div>})}
                    <Route path={`/key_ingredients/${id}`} component={withRouter(Ingredient)}/> 
                </div>
            </Router>
        )
    }
}
export default withRouter (ProductClick)