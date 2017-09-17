import React, {Component} from 'react';
import SearchProducts from "./SearchProducts.js";
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import AllProducts from './AllProducts.js';
import Navbar from './Navbar.js'
import Product from './Product.js'
import Store from '../store';
import CartState from '../reducers/';
import Cart from './Cart.js'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {connect} from 'react-redux';
import {loadState, saveState} from './localStorage.js'
const persistedState =  loadState();
const StoreInstance = createStore(
  CartState,
  persistedState
)
StoreInstance.subscribe(()=> {
  saveState(StoreInstance.getState());
})
class Index extends Component {
  render() {
    return (
      <Provider store={StoreInstance}>
      <div>

<Navbar/>
      <Switch>

          <Route exact path='/' component={SearchProducts}/>
          <Route path='/all/' component={AllProducts}/>
          <Route path='/product/*' component={Product}/>
          <Route path='/cart/' component={Cart}/>
          <Route exact path='/product/:name' render={(props) => (<Product  />)} />
        </Switch>

      </div>
</Provider>
    );
  }
}

export default Index;
