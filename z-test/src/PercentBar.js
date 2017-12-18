import React, { Component } from 'react';

class PercentBar extends Component {
  render() {
    return (
      <div className="percent-bar">
        <span className="percent">36%</span>
        <span className="remaining">64%</span>
      </div>
    );
  }
}

export default PercentBar;
