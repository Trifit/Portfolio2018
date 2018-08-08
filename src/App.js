import React, { Component } from 'react';
import './App.css';
import Experience from './Experience/Experience';
import appObj from './data.json';

class App extends Component {
  render() {
    return (
      <section>
        <header>
          <h1>David H. Parramon</h1>
        </header>
        {appObj.experiences.map(experience=> 
          <Experience 
            key={experience.company}
            company={experience.company}
            description={experience.description}
            tools={experience.tools}
          />
        )}
        
      </section>
    );
  }
}

export default App;
