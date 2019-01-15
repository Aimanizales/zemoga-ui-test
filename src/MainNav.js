import React, { Component } from 'react';

class MainNav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-end mt-3">
          <li className="nav-item">
            <a href="#" className="nav-link">Past Trials</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">How It Works</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Log In / Sign Up</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
