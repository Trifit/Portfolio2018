import React, { Component } from 'react';
import styles from './App.css';
import appObj from './data.json';
import Topic from './components/Topic/Topic';

class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <section className={styles.intro}>
          <h1 className={styles.name}>{appObj.name}</h1>
          <h2 className={styles.job}>{appObj.job}</h2>
          <p className={styles.description}>{appObj.personalDescription01}</p>
        </section>
        <section className={styles.content}>
          <ul>
            <Topic topic="experience" appObj={appObj}/>
            <Topic topic="project" appObj={appObj}/>
            <Topic topic="findme" appObj={appObj}/>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
