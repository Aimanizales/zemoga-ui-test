import React, { Component } from 'react';

class Hero extends Component {
	render() {
		const divStyle = {
			backgroundImage: 'url(' + this.props.image + ')',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			height: '90vh',
		};
		return (
			<div className="hero container-fluid" style={divStyle}>
				<div className="container">
					<div className="row">
						<div className="col">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
