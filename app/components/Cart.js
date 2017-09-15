import React, {Component} from 'react';
import {connect} from 'react-redux';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <div>
      {this.props.cartState.cart.map((item) =>
        item
      )}
    </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {cartState: state.cartState};
}
export default connect(mapStateToProps)(Cart);
