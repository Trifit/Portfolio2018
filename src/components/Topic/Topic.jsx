import React, { Component } from 'react';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import styles from './Topic.css';

export default class Topic extends Component{
    renderTopic(topic, obj){
        switch(topic){
            case 'experience':
                return (
                <li className={styles.alternate}>
                    <h3>Experience</h3>
                    <ul>
                        {obj.experiences.map((experience, index)=> 
                            <Experience experience={experience} key={index}/>
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
                </li>)
            case 'findme':
                return (
                <li className={styles.alternate}>
                    <h3>Where to find me</h3>
                    <ul>
                    {obj.Contacts.map((contact, index)=> 
                        <li key={index}>
                        <a href={contact.url}>{contact.name}</a>
                        </li>
                    )}
                    </ul>
                </li>);
            default:
                return (<li>Couldn't load the component component</li>)
        }
    }
    render(){
        return (this.renderTopic(this.props.topic, this.props.appObj));
    };
}