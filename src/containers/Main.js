import React from 'react'
import Product from '../components/Product'
import '../App'
import skintip from '../skintip.png'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

const SkinTip = styled.div`
justify-content: center;
`

const Products = styled.div`
justify-content: center;
display: flex;
flex-wrap: wrap;
`



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




    render() {
        // if (this.props.filtered !== []) { return(
        // this.props.filtered.map(product => <Product key={product.id} {...product}/>)) } else {
        return(
            <Wrapper>
                    <br />
                    <SkinTip>
                    <img src={skintip} width='500' height='300' alt='stay hydrated'/>
                    </SkinTip>
                    <br />
                    <br />
                    {this.props.filtered !== [] ? 
                    <Products>
                            {this.props.filtered.map(product => 
                                <Product 
                                    addLike={this.props.addLike}
                                    addComment={this.props.addComment}
                                    key={product.id} {...product}/>)}
                    </Products>
                                : 
                                <Products>
                                    {this.props.products.map(product => 
                                        <Product 
                                            addLike={this.props.addLike}
                                            addComment={this.props.addComment}
                                            key={product.id} {...product}/>)}
                                </Products> 
    }
            </Wrapper>
    
        )
                }
    }
export default Main