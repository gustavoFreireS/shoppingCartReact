import React, {Component} from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props.match.params[0]);
    return (
    <div>

      <h1>{this.props.match.params[0]}</h1>
    </div>
    );
  }
}

export default Product;
