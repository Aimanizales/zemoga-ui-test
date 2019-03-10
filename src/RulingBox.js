import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentUp: parseFloat(this.props.percentUp) || 0,
			voteEnabled: true
		}
	}

	// isDisabled = () => {
	// 	return this.state.percentUp < 100;
	// }

	handleChange = () => {
		this.setState((state) => {
			let newValue = state.percentUp + 2;
			if(newValue > 100) {
				newValue = 100;
			}
			if(newValue < 0) {
				newValue = 0;
			}
			console.log('newValue:', newValue);
			return {
				percentUp: newValue
			}
		})
	}

	render() {
		const divStyle = {
			backgroundImage: 'url(' + this.props.image + ')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			height: '100%',
			width: '100%',
		};
		const isDisabled = this.state.percentUp >= 100
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
							<button
								type="button"
								className="btn"
								disabled={isDisabled}
								href="/"
								onClick={this.handleChange}
							>
								Vote Now {this.isDisabled}
							</button>
						</div>
						<PercentBar
							name={this.props.name}
							percentUp={this.state.percentUp}
						/>
					</div>
				</div>
			</div>
			);
		}
	}
	
	export default RulingBox;
	