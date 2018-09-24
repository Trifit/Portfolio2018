import React, { Component } from 'react';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import styles from './App.css';
import appObj from './data.json';

class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <section className={styles.intro}>
          <h1>{appObj.name}</h1>
          <h2>Front end Developer</h2>
          <p className={styles.description}>{appObj.personalDescription01}</p>
        </section>
        <section className={styles.content}>
          <ul>
            <li>
              <h3>Experience</h3>
              <ul>
              {appObj.experiences.map((experience, index)=> 
                <Experience key={index} company={experience.company} description={experience.description} tools={experience.tools}/>
              )}
            </ul>
          </li>
          <li>
            <h3>Some of my work</h3>
            <ul>
            {appObj.projects.map((project, index)=>
              <Project project={project} key={index} />
            )}
            </ul>
          </li>
          <li>
            <h3>Where to find me</h3>
            <ul>
              {appObj.Contacts.map((contact, index)=> 
                <li key={index}>
                  <a href={contact.url}>{contact.name}</a>
                </li>
              )}
            </ul>
          </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
