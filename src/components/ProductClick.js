import React from 'react'

class ProductClick extends React.Component{

    state = {
        productid: this.props.currentProduct,
        productinfo: {}
    }

    // componentDidMount = () => {
    //     this.fetchProductInfo()
    // }

    fetchProductInfo = () => {
        fetch(`http://localhost:3000/api/v1/products/${this.props.routerProps.match.params.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            productinfo: data
            })
        })
    }

    // fetchIngredientInfo = () => {
    //     fetch('http://localhost:3000/api/v1/products')
    //     .then(resp => resp.json())
    //     .then(data => {
    //       this.setState({
    //         products: data
    //       })
    //     })
    //   }

    render(){
        return (
                <div> 
                    hellohello
                </div>
        )
    }
}
export default ProductClick