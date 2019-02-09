import React, { Component } from 'react';
import Menu from './MainNav';

class Header extends Component {
	render() {
		return (
			<header className="header container fixed-top">
				<div className="row">
					<div className="col-md-6">
						<h1 className="display-4 text-left">Rule of Thumb.</h1>
					</div>
					<div className="col">
						<Menu />
					</div>
				</div>
			</header>
		);
	}
};

export default Header;
