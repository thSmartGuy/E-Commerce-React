import React, { Component } from 'react' ;
import {storeProducts, detailProduct} from './data' ;

const ProductContext = React.createContext() ;
// shubham: provider and consumer
class ProductProvider extends Component {
  state = {
    products:storeProducts,
    detailProduct:detailProduct
  }

  handleDetail = () => {
    console.log('gello from detail') ;
  }

  addToCart = () => {
    console.log('hello from add to cart');
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
