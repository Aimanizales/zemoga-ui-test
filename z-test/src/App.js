import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import RulingBox from './RulingBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="ruling-box-home">
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
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
