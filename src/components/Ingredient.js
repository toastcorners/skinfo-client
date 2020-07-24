import React, { Component } from 'react';
import styled from 'styled-components'


const StudyLinks = styled.a`
 color: #d49ba8;
`

const Details = styled.div`
    margin: 20px;
    font-size: medium;
    font-family: 'Raleway', sans-serif;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 800px;
`

const Description = styled.div`
    align-content: center;
`

const Name = styled.h3`
    justify-content: center;
`

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
        const {id, name, properties, description, studies, products} = this.state.ingredient
        return (
               <Details className='ingredient-details'> 
                {/* <img src={img_url} width='300' height='300' alt={name}/> */}
                    <Name><strong>{name}</strong></Name>
                    <p><strong>Description</strong></p>
                    <Description>{description}</Description>
                    <p><strong>Properties</strong></p>
                    <span>{properties}</span>
                    <p><strong>Sources</strong></p>
                    {studies && studies.map(study => {return <StudyLinks key={study.id}>{study.source}</StudyLinks>})}
                </Details>
        )
    }
}
export default Ingredient