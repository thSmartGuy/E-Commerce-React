import React, { Component } from 'react'

import Product from './Product'
import Title from './Title.js'
import {storeProducts} from './../data.js' ;

class ProductList extends Component{
  state = {
    product:storeProducts 
  }
  render(){
    console.log(this.state.product)
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>
            <div className="row"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList ;
