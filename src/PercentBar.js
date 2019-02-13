import React, { Component } from 'react';

class PercentBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			up: 0,
			down: 100
		};
	}

	componentDidMount() {
		const percentUp = this.props.percentUp || 0;
		const percentDown = (100 - this.props.percentUp) || 0;
		this.setState({
			up: percentUp,
			down: percentDown,

		});
	}
	render() {
		const divStyleBarUp = {
			width: this.state.up + '%',
		};
		const divStyleBarDown = {
			width: this.state.down + '%',
		};

		return (
			<div className="percent-bar">
				<div className="percent-bar-up" style={divStyleBarUp}>
					{this.state.up}%
				</div>
				<div className="percent-bar-down" style={divStyleBarDown}>
					{this.state.down}%
				</div>
			</div>
		);
	}
};

export default PercentBar;
