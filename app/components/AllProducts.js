import React, {Component} from 'react';
import * as Actions from '../actions/listActions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../stylesheets/allProducts.scss');

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    }
  render() {
    return (
      <div className='container'>
      <h1 className='header-products'>All Products</h1>
      <div className='productsContainer'>
        {this.props.listState.map((item) =>
          <div className='product'>
            <div className='product-img'>
              <img alt={item.name + ' image'} src={item.image}height='200px'></img>
            </div>
            <p className='item-name'>{item.name}</p>
            <button className='btn-red' onClick={() => this.props.actions.addToCart(item)}>Add to cart</button>
        </div>
        )}
      </div>

      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {cartState: state.cartState,
          listState: state.listState
        };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
