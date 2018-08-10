import React, { Component } from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

export default class Experience extends Component{
    constructor(props){
        super(props);
        this.state = "";
    }
    render(){
        return (
            <article>
                <h3>{this.props.company}</h3>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <ul className={styles.tecnologyList}>
                    {this.props.tools.map(tool =>
                        <li className={styles.tecnology}>
                            <Tecnology 
                                key={tool} 
                                name={tool}
                                logo={tool+'Logo'} />
                        </li>
                    )}
                </ul>
            </article>
        );
    }
}