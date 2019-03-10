import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import RulingBox from './RulingBox';
import BeCounted from './BeCounted';


// const data = {
// 	items: {
// 		name: 'Mark Zuckerberg
// 	}
// };

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Hero
					image="pope-francis.jpg"
				/>
				<main className="pt-4 container">
					<BeCounted />
					<h2 className="my-3">Votes</h2>
					<section className="ruling-box d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-stretch">
						<RulingBox
							name="Mark Zuckerberg"
							image="mark-zuckerberg.jpg"
							percentUp="40"
						/>
						<RulingBox
							name="Cristina Fernández de Kitchner"
							image="kristina-fernandez-de-kitchner.jpg"
						/>
						<RulingBox
							name="Malala Yousafzai"
							image="malala-yousafzai.jpg"
							percentUp="97"
						/>
						<RulingBox
							name="Kanye West"
							image="kanye-west.jpg"
							percentUp="2"
						/>
					</section>
				</main>
				<Footer />
			</div>
		);
	}
};

export default App;
