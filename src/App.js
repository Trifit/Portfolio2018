import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './Experience/Experience';

class App extends Component {
  render() {
    return (
      <section>
        <header>
          <h1>David H. Parramon</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Experience />
      </section>
    );
  }
}

export default App;
