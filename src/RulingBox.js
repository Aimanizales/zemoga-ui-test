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
			<div className="ruling-box-item p-2">
				<div style={divStyle}>
					<div className="h-100 d-flex align-content-end flex-wrap">
						<div className="w-100 ruling-box-content p-3 pb-5">
							<h3 className="text-white">{this.props.name || 'Kanye West'}</h3>
							<p className="text-white date-category">
								<strong>1 month ago</strong> in business
							</p>
							<p className="text-white">
								Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.
							</p>
							<a className="button" href="/">Vote Now</a>
						</div>
						{this.props.percentUp ?
							<PercentBar
								percentUp={this.props.percentUp}
							/> : null
						}
						
					</div>
				</div>
			</div>
			);
		}
	}
	
	export default RulingBox;
	