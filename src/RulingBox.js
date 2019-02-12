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
			width: '100%',
		};
		return (
			<div className="ruling-box-item p-2 d-flex">
				<div style={divStyle}>
					<div className="rulingbox-content p-3">
						<h3 className="text-white">{this.props.name || 'Kanye West'}</h3>
						<p className="text-white date-category">1 month ago in business</p>
						<p className="text-white">Paula se va a secar el pelito</p>
						<a className="button" href="/">View Full Report</a>
					</div>
					<PercentBar />
				</div>
			</div>
			);
		}
	}
	
	export default RulingBox;
	