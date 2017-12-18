import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
  render() {
    return (
      <div className="ruling-box">

        <h2>{this.props.name || 'Kanye West'}</h2>
        <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
        <a className="button">View Full Report</a>
        <span className="date-category">1 month ago in business</span>
        <PercentBar />
      </div>
    );
  }
}

export default RulingBox;
