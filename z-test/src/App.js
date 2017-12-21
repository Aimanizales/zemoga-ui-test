import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import RulingBox from './RulingBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="be-counted">
            <h2>Speak out. Be heard. Be counted</h2>
            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
          </div>
          <article className="ruling-box-home">
            <h2>Previous Rulings</h2> <br/>
            <RulingBox
              name="Mark Zuckerberg"
            />
            <RulingBox
              name="Cristina Fernández de Kitchner"
            />
            <RulingBox
              name="Malala Yousafai"
            />
            <RulingBox />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
