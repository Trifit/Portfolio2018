import React, { Component } from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

export default class Experience extends Component{
    constructor(props){
        super(props);
        if(this.props.experience.description) {
            this.description = <p>{this.props.experience.description.replace("\\n","\n")}</p>
        };
    }
    
    render(){
        return (
            <li>
                <h4>{this.props.experience.company}</h4>
                <h5>{this.props.experience.title}</h5>
                {this.description}
                <ul className={styles.tecnologyList}>
                    {this.props.experience.tools.map((tool, index) =>
                        <li key={index} className={styles.tecnology}>
                            <Tecnology key={index} name={tool} />
                        </li>
                    )}
                </ul>
            </li>
        )
    };
} 