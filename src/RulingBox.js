import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
  render() {
    return (
      <article className="ruling-box flex-fill bg-info">
        <h3 className="text-white-50">{this.props.name || 'Kanye West'}</h3>
        <p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
        <a className="button" href="#">View Full Report</a>
        <span className="date-category">1 month ago in business</span>
        <PercentBar />
      </article>
    );
  }
}

export default RulingBox;
