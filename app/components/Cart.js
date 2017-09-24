import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/listActions.js';
import {connect} from 'react-redux';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='container'>
        <h1 className='header-products'>Buy Cart</h1>
        <div className='productsContainer'>
          {this.props.cartState.cart
            ? (this.props.cartState.cart.map((item) => <div className='product'>
              <div className='product-img'>
                <img height='200px' src={item.image}></img>
              </div>
              <p className='item-name'>{item.name}</p>
              <button className='btn-red' onClick={() => this.props.actions.deleteThis(item)}>Remove this</button>
            </div>))
            : ''
}
        </div>
        <button className='btn-black' onClick={() => this.props.actions.removeAll()}>Remove All</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
