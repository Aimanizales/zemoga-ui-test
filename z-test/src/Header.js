import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rule of Thumb</h2>
        </div>
      </div>
    );
  }
}

export default Header;
