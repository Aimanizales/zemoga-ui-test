import React, { Component } from 'react';
import Menu from './MainNav';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Rule of Thumb</h2>
        <h2>This is the Header Component</h2>
        <Menu />
      </header>
    );
  }
}

export default Header;
