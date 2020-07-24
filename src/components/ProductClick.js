import React from 'react'
import Ingredient from './Ingredient'
import { BrowserRouter as Route, Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../src/images/app-logo.png'


const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 980px;
  height: 72px;
  padding: 16px 0px 2px;
`

const Logo = styled.div`
  /* display: flex; */
align-content: center;
 justify-content: center; 
  /* position: absolute;  */
  display: block;
 /* transform: translateY(0%); */
 transform: translateX(100%);    
`

const Brand = styled.span`
    color: black;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;

`
const Name = styled.span`
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    color: #d49ba8;
`
const Skinconcerns = styled.p`
    display: flex;
    justify-content: center;
    margin: 20px;
`
const Ingredients = styled.span`
    display: flex;
    justify-content: center;
    margin: 20px;
`

const KeyIngredients = styled.p`
    display: flex;
    justify-content: center;
    margin: 20px;
`
const Photo = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    transform: translateY(-30%);  
    mix-blend-mode: multiply;
    /* box-shadow: 0 0.5rem 1.5rem #AF9488; */
    /* filter: drop-shadow(0 0.5rem 1.5rem #AF9488); */
    /* animation: fadeIn ease 10s;
    -webkit-animation: fadeIn ease 10s; */

`
const Likes = styled.span`
/* transform: translateY(300%);  */
transform: translateX(-400%); 
text-align: center;
`

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

    render(){
        const { id, brand, name, description, benefits, key_ingredients, full_ingredients, img_url, likes} = this.state.productinfo
        return (
            <div>
            <LogoDiv>
            <Logo>
            <img src={logo} alt='logo'></img>
            </Logo>
            </LogoDiv>
            <div className='product-show'>
            <Photo className='product-img'> 
            <img src={img_url} className='product-image' width='300' height='300' alt={name}/>
            </Photo>
            <Likes> {likes} likes</Likes>
                <div className='product-details'> 
                    <br />
                    <Brand><strong>{brand}</strong></Brand>
                    <br />
                    <Name><strong>{name}</strong></Name>
                    <p><strong>What does it do? </strong>{description}</p>
                    <p><strong>Ingredients: </strong>{full_ingredients}</p>
                    <Skinconcerns><strong>Skin Concerns: </strong> {benefits}</Skinconcerns>
                    <KeyIngredients><strong>Key Ingredients:</strong></KeyIngredients>
                    {key_ingredients && key_ingredients.map(ingredient => {return <Ingredients key={ingredient.id}><Link to={`/key_ingredients/${ingredient.id}`}>{ingredient.name}</Link></Ingredients>})}
                    <Route path={`/key_ingredients/${id}`} component={withRouter(Ingredient)}/> 
                </div>
                </div>
                </div>
        )
    }
}
export default withRouter (ProductClick)