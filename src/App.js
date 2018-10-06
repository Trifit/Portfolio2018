import React, { Component } from 'react';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import styles from './App.css';
import appObj from './data.json';
import Pic from "./uploads/projects/bcn_project.png";

class App extends Component {
  onclick(event){
    console.log(event);
  }
  render() {
    return (
      <div className={styles.main}>
        <section className={styles.intro}>
          <h1>{appObj.name}</h1>
          <h2>Front end Developer</h2>
          <Pic />
          <p className={styles.description}>{appObj.personalDescription01}</p>
        </section>
        <section className={styles.content}>
          <ul>
            <li>
              <button className="js-toggle-visibility"><h3>Experience</h3></button>
              <ul>
              {appObj.experiences.map((experience, index)=> 
                <Experience experience={experience} key={index}/>
              )}
            </ul>
          </li>
          <li>
            <button><h3>Some of my work</h3></button>
            <ul>
            {appObj.projects.map((project, index)=>
              <Project project={project} key={index} />
            )}
            </ul>
          </li>
          <li>
            <button className="js-toggle-visibility"><h3>Where to find me</h3></button>
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
