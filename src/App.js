import React, { Component } from 'react';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import styles from './App.css';
import appObj from './data.json';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>{appObj.name}</h1>
          <h2>Front end Developer</h2>
          <p className={styles.description}>{appObj.personalDescription01}</p>
        </section>
        <ul>
          <li>
            <h3>Experience</h3>
            <ul>
            {appObj.experiences.map((experience, index)=> 
              <Experience 
                key={index}
                company={experience.company}
                description={experience.description}
                tools={experience.tools}/>
            )}
          </ul>
        </li>

        <li>
          <h3>Some of my work</h3>
          <ul>
          {appObj.projects.map((project, index)=>
            <Project 
              projectName={project.name} 
              client={project.client} 
              clientUrl={project.client} 
              description={project.description}
              key={index} />
          )}
          </ul>
        </li>
        
        <li>
          <h3>Where to find me</h3>
        </li>
        </ul>
      </div>
    );
  }
}

export default App;
