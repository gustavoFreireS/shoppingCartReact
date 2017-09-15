import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Hamburger from '../images/hamburger.svg';
import Cart from '../images/cart.png'
require('../stylesheets/navbar.scss');
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      showSide: "-600px"
    }
    this.addClick = this.addClick.bind(this);
    this.showNav = this.showNav.bind(this);
  }
  addClick(type){
    this.setState({
      clicked: type,
    });
  }
  showNav(){
    this.setState({
      showSide: this.state.showSide == "-600px" ? "0px" : "-600px"
    });
  }
  render() {
    return (
    <div>
    <nav className='white-navbar'>
      <div className='container'>
      <i className='hamburger'><img height='26px' onClick={()=>this.showNav()} src={Hamburger}></img></i>
      <Link onClick={() => this.addClick(false)} className={'link '+ (!this.state.clicked ? 'active' : '') } to='/'>Home</Link>
      <Link onClick={() => this.addClick(true)} className={'link '+ (this.state.clicked ? 'active' : '') } to='/all'>All Products</Link>
      <Link className='cart' style={{cursor:'pointer'}} to='/cart'> <img src={Cart} height='30px'></img> <span className='ball'>{this.props.cartState.cart ? this.props.cartState.cart.length : 0}</span></Link>
    </div>
  </nav>
  <div className='sideBar' style={{left: this.state.showSide}}>
    <Link onClick={() => this.addClick(false)} className={'sidelink '+ (!this.state.clicked ? 'active' : '') } to='/'>Home</Link>
    <Link onClick={() => this.addClick(true)} className={'sidelink '+ (this.state.clicked ? 'active' : '') } to='/all'>All Productss</Link>
  </div>
</div>
    );
  }
}

function mapStateToProps(state, props) {
  return {cartState: state.cartState};
}
export default connect(mapStateToProps)(Navbar);
