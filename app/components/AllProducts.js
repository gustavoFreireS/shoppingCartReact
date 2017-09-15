import React, {Component} from 'react';
import * as Actions from '../actions/listActions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: ['Apple', 'Orange', 'Lemon', 'Grape', 'Steak', 'Milk', 'Car']
    }
  }
  render() {
    var hue = this.props.cartState.cart
    return (
      <div>
      <h1>All Products</h1>
      <ul>
        {this.state.products.map((item) =>
          <li>{item}<button onClick={() => this.props.actions.addToCart(item)}>Add to cart</button></li>
        )}
      </ul>
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
