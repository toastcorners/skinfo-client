import React from 'react'

class Ingredient extends React.Component{

    state = {
        ingredient: []
    }

    componentDidMount = () => {
        this.fetchIngredient()
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

    render(){
        console.log(this.props)
        return (
            <div>
                {/* <div className="image-wrapper" >
                    <img className="product-shot-img" src={} alt={}/>
                </div> */}
            {/* <h3>{this.props.ingredient.name}</h3>
            <p>{this.props.ingredient.description}</p>
            <h3>Properties</h3>
            <p>{this.props.ingredient.properties}</p> */}
        </div>
        )
    }
}
export default Ingredient