import React, { Component } from 'react'

import Product from './Product'
import Title from './Title.js'
import {ProductConsumer} from './../context.js' ;

class ProductList extends Component{

  render(){
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>

            <div className="row">
              <ProductConsumer>
                {
                /*Shubham:
                Since we are n consumer we can access all the props of
                producer from here it will be automatically passed as an argument
                */
                }
                {(value)=>{
                  console.log(value);
                  return value.products.map(
                    (product) => {
                      return(
                        <Product key={product.id} product={product}/>
                      );
                    }
                  ) ;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductList ;
