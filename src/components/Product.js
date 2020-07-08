import React, { Component } from 'react'
import '../App.css';
import ProductClick from './ProductClick'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

const ProductDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: 200px;
    /* justify-content: center;
    flex-direction: column; */
    margin: 20px;
    padding: 2px;

`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    mix-blend-mode: multiply;
    margin: 20px;
    padding: 2px;
    transition: transform .2s;
    width: 200px;
    height: 200px; 
    margin: 0 auto;
    &:hover{
        transform: scale(1.5);
    }

`

const InfoDiv = styled.div`
    display: flex;
    align-content: center;
    margin: 20px;
    flex-direction: column;
    position: relative;

`
const Brand = styled.div`
    display: flex;
    align-content: center;
    margin: 20px;
    position: relative;
`
const Name = styled.span`
    align-content: right;
    margin: 20px;
    position: relative;
`
const Likes = styled.span`
   align-content: right;
    margin: 20px;
    position: relative;
`
const LikeButton = styled.button`
    align-content: right;
    border-radius: 5px;
    margin: 20px;
    position: relative;
    &:hover{
        color: #d49ba8
    }


`
















class Product extends Component {

    state = {
        isLiked: false,
        products: [],

    }

    handleLike = (e) => {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
        }))
         const likes = parseInt(this.props.likes)
         this.props.addLike(likes, this.props.id)
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
        const { id, brand, name, img_url, likes} = this.props
        return (
        
                <ProductDisplay className='product-div'>
                    <ImageWrapper className='image-wrapper'>
                        <img className="product-shot-img" height='200' width='200' src={img_url} alt={name}/>
                        </ImageWrapper>
                    <InfoDiv className='info-div'>
                        <Brand><strong>{brand}</strong></Brand>
                        <Name><Link to={`/products/${id}`}>{name}</Link></Name>
                        <Likes>{likes} likes | {this.state.isLiked === false ? <LikeButton onClick={this.handleLike}> &hearts; like </LikeButton> : 
                        <LikeButton onClick={this.handleLike}> &hearts; liked </LikeButton>}
                        </Likes>
                    </InfoDiv> 
                    <Route path={`/products/${id}`} components={ProductClick}/>
                    </ProductDisplay>
    
        )
    }
}
export default Product