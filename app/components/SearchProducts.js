import React, {Component} from 'react';

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      <h1>Test</h1>
      <input type='text' placeholder='Search Products'></input>
      <button>search</button>
    </div>
    );
  }
}

export default SearchProducts;
