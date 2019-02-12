import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
	render() {
		const divStyle = {
			backgroundImage: 'url(' + this.props.image + ')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			height: '100%',
		};
		return (
			<div className="ruling-box-item p-2">
				<div style={divStyle}>
					<div className="rulingbox-content">
						<h3 className="text-white-50">{this.props.name || 'Kanye West'}</h3>
						<p>Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.</p>
						<a className="button" href="/">View Full Report</a>
						<span className="date-category">1 month ago in business</span>
					</div>
					<PercentBar />
				</div>
			</div>
			);
		}
	}
	
	export default RulingBox;
	