import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/listActions.js';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const allProd = this.props.listState;
    const name = this.props.match.params[0];
    const lista = allProd.filter(function(el) {
      return el.name == name;
    });
    return (
      <div className='container'>
        <h1 className='header-products'>Search Results:</h1>
        <div className='productsContainer'>
          {lista.map((item) => <div className='product'>
            <div className='product-img'>
              <img height='200px' alt={item.name + ' image'} src={item.image}></img>
            </div>
            <p className='item-name'>{item.name}</p>
            <button className='btn-red' onClick={() => this.props.actions.addToCart(item)}>Add to cart</button>
          </div>)}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {listState: state.listState};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
