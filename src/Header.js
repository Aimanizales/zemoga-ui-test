import React, { Component } from 'react';
import Menu from './MainNav';

class Header extends Component {
	render() {
		return (
			<header className="header container-fluid fixed-top">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1>Rule of Thumb.</h1>
						</div>
						<div className="col">
							<Menu />
						</div>
					</div>
				</div>
			</header>
		);
	}
};

export default Header;
