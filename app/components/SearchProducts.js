import React, {Component} from 'react';
import {connect} from 'react-redux';
import Background from '../images/background.jpeg';
import Autosuggest from 'react-autosuggest';
require('../stylesheets/searchPage.scss');
require('../stylesheets/style.scss');

var lista = [];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : lista.filter(list =>
    list.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};
const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    lista = this.props.listState;
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Products',
      value,
      onChange: this.onChange
    };
    return (
      <div className='background'>
      <h1>React Test Fruit Market</h1>
      <h2> A test using redux, and react router</h2>
      <div className='searchBar'>
        <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         getSuggestionValue={getSuggestionValue}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
       />
      <button className='btn-red'>search</button>
    </div>
    </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {listState: state.listState};
}
export default connect(mapStateToProps)(SearchProducts);
