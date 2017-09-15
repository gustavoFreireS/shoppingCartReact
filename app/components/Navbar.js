import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <div>
      <Link to='/'>Home</Link>
      |
      <Link to='/all'>All Products</Link>
      |
      cart amount: {this.props.cartState.cart ? this.props.cartState.cart.length : 0}
    </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {cartState: state.cartState};
}
export default connect(mapStateToProps)(Navbar);
