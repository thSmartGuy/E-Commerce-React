import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom' ;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

// import --save react-router-dom
// import --save bootstrap

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {
        //  Just like Switch in CPP(whatever written after
        //    localhost:3000 will be passed as arguments)
      }
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
