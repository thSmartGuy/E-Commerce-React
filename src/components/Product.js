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
          <div className="img-container p-5" onClick={console.log('You Clicked Me on the image Container!')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"/>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`;

export default Product ;
