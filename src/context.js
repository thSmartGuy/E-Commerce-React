import React, { Component } from 'react' ;
import {storeProducts, detailProduct} from './data' ;

const ProductContext = React.createContext() ;
// Shubham: provider and consumer
class ProductProvider extends Component {
  state = {
    products:[],
    detailProduct:detailProduct
  }

  /*Shubham: componentDidMount + setProducts is copying all the data one by one so that it will not be passed by reference*/
  componentDidMount(){
    this.setProducts() ;
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem] ;
    });

    this.setState(() => {
      return {products:tempProducts} ;
    });
  }

  handleDetail = () => {
    console.log('hello from detail') ;
  }

  addToCart = (id) => {
    console.log('hello from add to cart. id is ${id}');
  }

  render() {
    return (
      <div>
        <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart
        }}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    )
  }
}

// consumer
const ProductConsumer = ProductContext.Consumer ;

export {ProductProvider, ProductConsumer} ;
