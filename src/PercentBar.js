import React, { Component } from 'react';

class PercentBar extends Component {
	render() {
		const percentUp = this.props.percentUp;
		const percentDown = 100 - percentUp;

		const divStyleBarUp = {
			width: percentUp + '%',
		};

		const divStyleBarDown = {
			width: percentDown + '%'
		}

		return (
			<div className="percent-bar">
				<div className="percent-bar-up" style={divStyleBarUp}>
					{percentUp}%
				</div>
				<div className="percent-bar-down" style={divStyleBarDown}>
					{percentDown}%
				</div>
			</div>
		);
	}
};

export default PercentBar;
