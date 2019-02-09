import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
	render() {
		return (
			<div className="ruling-box-item bg-info flex-grow-1 m-2">
				<div className="col my-2">
					<h3 className="text-white-50">{this.props.name || 'Kanye West'}</h3>
					<p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
					<a className="button" href="/">View Full Report</a>
					<span className="date-category">1 month ago in business</span>
					<PercentBar />
				</div>
			</div>
			);
		}
	}
	
	export default RulingBox;
	