import React, { Component } from 'react';
import Tecnology from '../Tecnology/Tecnology';
import styles from './Experience.css';

export default class Experience extends Component{
    constructor(props){
        super(props);
        if(this.props.description) {
            this.description = <p>{this.props.description.replace(/\n/g,"</p><p>")}</p>
        };
    }
    
    render(){
        return (
            <li>
                <h4>{this.props.company}</h4>
                <h5>{this.props.title}</h5>
                {this.description}
                <ul className={styles.tecnologyList}>
                    {this.props.tools.map((tool, index) =>
                        <li key={index} className={styles.tecnology}>
                            <Tecnology key={index} name={tool} />
                        </li>
                    )}
                </ul>
            </li>
        )
    };
} 