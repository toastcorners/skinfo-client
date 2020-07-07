import React, { Component } from 'react';

class Ingredient extends Component{

    state = {
        ingredient: []
    }

    componentDidMount = () => {
        this.fetchIngredient()
    }

    fetchIngredient = () => {
        const url = this.props.location.pathname
        fetch(`http://localhost:3000/api/v1${url}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            ingredient: data
            })
        })
    }

    render(){
        console.log(this.props)
        // @ts-ignore
        const {id, name, properties, description, studies} = this.state.ingredient
        return (
               <div className='ingredient-details'> 
                {/* <img src={img_url} width='300' height='300' alt={name}/> */}
                    <h3><strong>{name}</strong></h3>
                    <p><strong>Description</strong></p>
                    <span>{description}</span>
                    <p><strong>Properties</strong></p>
                    <span>{properties}</span>
                    <p><strong>Sources</strong></p>
                    {studies && studies.map(study => {return <div key={study.id}>{study.source}</div>})}

                </div>
        )
    }
}
export default Ingredient