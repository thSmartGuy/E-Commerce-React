import React, { Component } from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;
import { ProductConsumer } from '../context.js' ;

class Product extends Component{
  render(){
    const {id, title, img, price, inCart} = this.props.product ;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          {/*Shubham: CSS Bootstrap => col having 9 px wide margin auto col for mid size 6 col wide for
            large screen size itwill be 3 col wide margin too-bottom (y) -> 3 col wide*/}
          <div className="img-container p-5" onClick={() => console.log('You Clicked Me on the image Container!')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button className="cart-btn" disabled={
                            inCart? true: false}>
            {inCart ? (
              <p className="text-capitalize mp-0" disabled>
                in inCart
              </p>
            ) : (
              <i className="fas fa-cart-plus"/>
            )}
            </button>
            {/*Shubham: Card footer for holding title*/}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">
                {title}
              </p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">
                  Rs
                </span>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`;

export default Product ;
