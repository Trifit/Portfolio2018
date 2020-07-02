import React from 'react';
import styles from './Tecnology.css';

export default class Tecnology extends React.Component{
    render (){ 
        return (
            <div className={styles.tecnology}>
                <p>{this.props.name}</p>
            </div>
        );
    }
}