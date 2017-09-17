import React, {Component} from 'react';
import * as Actions from '../actions/listActions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Apple from '../images/apple.png';
import Orange from '../images/orange.png';
import Watermelon from '../images/watermelon.png';
import Banana from '../images/banana.png';
import Lemon from '../images/lemon.png';
import Grapes from '../images/grape.png';
require('../stylesheets/allProducts.scss');

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Apple',
          image: Apple
        },
        {
          name: 'Orange',
          image: Orange
        },
        {
          name: 'Watermelon',
          image: Watermelon
        },
        {
          name: 'Banana',
          image: Banana
        },
        {
          name: 'Lemon',
          image: Lemon
        },
        {
          name: 'Grapes',
          image: Grapes
        }
      ]
    };
    }
  render() {
    var hue = this.props.cartState.cart;
    return (
      <div className='container'>
      <h1 className='header-products'>All Products</h1>
      <div className='productsContainer'>
        {this.state.products.map((item) =>
          <div className='product'>
            <div className='product-img'>
              <img src={item.image}height='200px'></img>
            </div>
            <p className='item-name'>{item.name}</p>
            <button className='btn-red' onClick={() => this.props.actions.addToCart(item)}>Add to cart</button>
        </div>
        )}
      </div>
      <button onClick={() => this.props.actions.removeAll()} >Remove All</button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {cartState: state.cartState};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
