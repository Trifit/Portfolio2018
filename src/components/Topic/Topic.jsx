import React from 'react';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import styles from './Topic.css';
import Envelope from '../../uploads/email.js';

export default (props) => {
    const renderTopic = (topic, obj)=> {
        switch(topic){
            case 'experience':
                return (
                <li className={styles.experience}>
                    <h3>Experience</h3>
                    <ul className={styles.experienceList}>
                        {obj.experiences.map((experience, index)=> 
                            index%2 === 1? <Experience experience={experience} key={index}/> : <Experience experience={experience}  className={styles.alternate} key={index}/>
                        )}
                    </ul>
                </li>);
            case 'project':
                return (
                <li>
                    <h3>Some of my work</h3>
                    <ul>
                    {obj.projects.map((project, index)=>
                        <Project project={project} key={index} />)}
                    </ul>    
                </li>);
            case 'findme':
                return (
                <li className={styles.alternate}>
                    <h3>Where to find me</h3>
                    <Envelope />
                    <ul className={styles.contactInfo}>
                    {obj.Contacts.map((contact, index)=> 
                        <li key={index}>
                            <a href={contact.url}>{contact.name}</a>
                            {/* <Envelope /> */}
                        </li>
                    )}
                    </ul>
                </li>);
            default:
                return (<li>Couldn't load the component component</li>);
        }
    };
    return (renderTopic(props.topic, props.appObj));
}