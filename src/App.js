import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import RulingBox from './RulingBox';
import BeCounted from './BeCounted';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main className="mt-5 pt-5 container">
					<BeCounted />
					<h2>Votes</h2>
					<section className="ruling-box d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-stretch">
						<RulingBox
							name="Mark Zuckerberg"
						/>
						<RulingBox
							name="Cristina Fernández de Kitchner"
						/>
						<RulingBox
							name="Malala Yousafai"
						/>
					</section>
				</main>
				<Footer />
			</div>
			);
		}
	}
	
	export default App;
	