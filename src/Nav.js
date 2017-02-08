import React, { Component } from 'react';
import {Link} from 'react-router';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="store">Store</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Nav;
