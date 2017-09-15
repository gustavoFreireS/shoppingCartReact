import React, {Component} from 'react';
import Background from '../images/background.jpeg'
require('../stylesheets/searchPage.scss');
require('../stylesheets/style.scss');

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='background'>
      <h1>Ezreal Boioler's Market</h1>
      <h2> The place from where the best products belongs (not in a museum) </h2>
      <div className='searchBar'>
      <input type='text' placeholder='Search Products'></input>
      <button className='btn-red'>search</button>
    </div>
    </div>
    );
  }
}

export default SearchProducts;
