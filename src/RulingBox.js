import React, { Component } from 'react';
import PercentBar from './PercentBar';

class RulingBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentUp: parseFloat(this.props.percentUp) || 0
		}
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange = () => {
		this.setState((state) => {
			// en este punto se estaba renderizando, así estuviera en 100%,
			// pero se arregló con el return null.
			if (state.percentUp >= 100) return null;
			
			return {
				percentUp: state.percentUp < 100 ? state.percentUp + 1 : 100
			}
		});
		// console.log('Handling click event...', this.state.percentUp);
	}

	render() {
		// console.log('rendering RulingBox...', this.state.percentUp);
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
							<button type="button" className="btn" href="/" onClick={this.handleChange}>Vote Now</button>
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
	