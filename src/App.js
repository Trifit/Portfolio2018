import React, { Component } from 'react';
import styles from './App.css';
import Experience from './Experience/Experience';
import appObj from './data.json';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>{appObj.name}</h1>
          <p className={styles.description}>{appObj.personalDescription01}</p>
        </header>
        <h2>Experience</h2>
        {appObj.experiences.map(experience=> 
          <Experience 
            key={experience.company}
            company={experience.company}
            description={experience.description}
            tools={experience.tools}
          />
        )}
        <h2>Some of my work</h2>
        <h2>Where to find me</h2>
      </div>
    );
  }
}

export default App;
